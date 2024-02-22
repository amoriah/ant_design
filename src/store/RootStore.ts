import { applySnapshot, getSnapshot, Instance, types } from "mobx-state-tree";
import { hotels as hotelsData } from "../data/hotelsData";
import { HotelModel } from "./hotelsStore";
import { ReservationModel, ReservationModelType } from "./reservationStore";
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
  })
  .views((self) => ({
    get getHotels() {
      return self.hotels;
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
    // get filterByStars() {

    // }

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
        const user = self.searchUserById(self.session.session?.userId!); //получаю пользвваттелья

        //reservations state update
        self.reservations.push({ ...reservation }); //в стор резерваций пушу бронь
        localStorage.setItem("reservations", JSON.stringify(self.reservations)); // сохраняю эту бронь так де сторадж с сохранение брони покончено
        //session state update
        self.session.session?.reservations.push(reservation.reservId); // сохраняю в стор сессии эту бронь
        localStorage.setItem("session", JSON.stringify(self.session.session)); // так же сохраняю бронь в сторадж сессии
        //users state update
        user[0].reservations.push(reservation.reservId);
        const newUsers = self.updateUsersStore(user[0]);
        localStorage.setItem("users", JSON.stringify(newUsers));
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
    });
  }
  return rootStore;
}
