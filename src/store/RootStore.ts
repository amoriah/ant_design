import { applySnapshot, getSnapshot, Instance, types } from "mobx-state-tree";
import { hotels as hotelsData } from "../data/hotelsData";
import { FilterModel } from "./filterStore";
import { HotelModel } from "./hotelsStore";
import {
  ReservationModel,
  ReservationModelType,
  Status,
} from "./reservationStore";
import { SessionModel } from "./sessionStore";
import { UserModel, UserModelType } from "./usersStore";

const isAuthentication = localStorage.getItem("isAuthentication") === "true";

const sessionStr = localStorage.getItem("session");
const currentSession = sessionStr ? JSON.parse(sessionStr) : null;

const usersStorage = JSON.parse(localStorage.getItem("users") || "[]");
const reservationsStore = JSON.parse(
  localStorage.getItem("reservations") || "[]"
);

const RootStore = types
  .model("RootStore", {
    session: SessionModel,
    users: types.array(UserModel),
    hotels: types.array(HotelModel),
    reservations: types.array(ReservationModel),
    filter: FilterModel,
  })
  .views((self) => ({
    get getHotels() {
      const res = self.hotels.filter((hotel) => {
        return (
          hotel.stars === self.filter.starsCount &&
          hotel.cost >= self.filter.costDiapazon[0] &&
          hotel.cost <= self.filter.costDiapazon[1]
        );
      });
      return res;
    },
    get getReservations() {
      return self.reservations;
    },
    get getUsers() {
      return self.users;
    },
    get isAccess() {
      return self.session.isAuth;
    },
    get getUserBookHistory() {
      return self.reservations.filter((reservation) =>
        self.session.session?.reservations.includes(reservation.reservId)
      );
    },
    searchUserByPassword(login: string, password: string) {
      return self.users.filter(
        (u) => u.login === login && u.password === password
      );
    },
    searchUserById(id: string) {
      return self.users.filter((u) => u.userId === id);
    },
    updateUsersStore(user: any) {
      const oldUserIndex = self.users.indexOf(user);
      self.users.splice(oldUserIndex, 1, user);
      return self.users;
    },
  }))
  .actions((self) => {
    return {
      login(login: string, password: string) {
        const user = self.searchUserByPassword(login, password);
        if (user[0]) {
          localStorage.setItem("session", JSON.stringify(user[0]));
          localStorage.setItem("isAuthentication", JSON.stringify(true));
          self.session.isAuth = true;
          self.session.session = JSON.parse(
            localStorage.getItem("session") || "null"
          );
          return "success";
        } else return "failed";
      },
      signup(userId: string, login: string, password: string) {
        if (!self.searchUserByPassword(login, password).length) {
          self.users.push({ userId, login, password });
          localStorage.setItem("users", JSON.stringify(self.users));
          return "success";
        } else return "failed";
      },
      logout() {
        // localStorage.clear();
        localStorage.setItem("session", JSON.stringify(null));
        localStorage.setItem("isAuthentication", JSON.stringify(false));
      },

      book(reservation: ReservationModelType) {
        const user = self.searchUserById(self.session.session?.userId!);
        const states = [Status.Error, Status.Success];
        const inx = Math.floor(Math.random() * states.length);
        reservation.status = states[inx];
        if (states[inx] === "error") return "error";
        self.reservations.push({ ...reservation });
        localStorage.setItem("reservations", JSON.stringify(self.reservations));

        self.session.session?.reservations.push(reservation.reservId);
        localStorage.setItem("session", JSON.stringify(self.session.session));

        user[0].reservations.push(reservation.reservId);
        const newUsers = self.updateUsersStore(user[0]);
        localStorage.setItem("users", JSON.stringify(newUsers));
        return states[inx] as string;
      },

      setValue(newValue: string, id: string, key: keyof UserModelType) {
        const user = self.searchUserById(id);
        if (user) {
          applySnapshot(user[0], { ...getSnapshot(user[0]), [key]: newValue });
          localStorage.setItem("session", JSON.stringify(user[0]));
          self.session.session = JSON.parse(
            localStorage.getItem("session") || "null"
          );

          const newUsers = self.updateUsersStore(user[0]);
          localStorage.setItem("users", JSON.stringify(newUsers));
        }
      },
      setCostDiapazon(diapazon: any) {
        self.filter.costDiapazon = diapazon;
      },
      setStarsCount(stars: number) {
        self.filter.starsCount = stars;
      },
    };
  });

export type RootStoreType = Instance<typeof RootStore>;

let rootStore: RootStoreType;
export function useStore() {
  if (!rootStore) {
    rootStore = RootStore.create({
      session: {
        isAuth: isAuthentication,
        session: currentSession,
      },
      users: usersStorage,
      hotels: hotelsData,
      reservations: reservationsStore,
      filter: {
        starsCount: 5,
        costDiapazon: [300, 3000],
      },
    });
  }
  return rootStore;
}
