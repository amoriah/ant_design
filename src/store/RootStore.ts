import { Instance, types } from "mobx-state-tree";
import { hotels as hotelsData } from "../data/hotelsData";
import { HotelModel } from "./hotelsStore";
import { ReservationModel, ReservationModelType } from "./reservationStore";
import { SessionModel } from "./sessionStore";
import { UserModel } from "./usersStore";

const isAuthentication = localStorage.getItem("isAuthentication") === "true";

const sessionStr = localStorage.getItem("session");
const currentSession = sessionStr ? JSON.parse(sessionStr) : null;

const usersStorage = JSON.parse(localStorage.getItem("users") || "[]");

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
    searchUser(login: string, password: string) {
      return self.users.filter(
        (u) => u.login === login && u.password === password
      );
    },
  }))
  .actions((self) => {
    return {
      addReservation(reservation: ReservationModelType) {
        self.reservations.push({ ...reservation });
      },

      registerUser(userId: string, login: string, password: string) {
        if (!self.searchUser(login, password).length) {
          self.users.push({ userId, login, password });
          localStorage.setItem("users", JSON.stringify(self.users));
          return "success";
        } else return "failed";
      },

      login(login: string, password: string) {
        const user = self.searchUser(login, password);
        if (user[0]) {
          localStorage.setItem("session", JSON.stringify(user[0]));
          localStorage.setItem("isAuthentication", JSON.stringify(true));
          self.session.isAuth = true;
          return "success";
        } else return "failed";
      },

      logout() {
        // localStorage.clear()
        localStorage.setItem("session", JSON.stringify(null));
        localStorage.setItem("isAuthentication", JSON.stringify(false));
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
      reservations: [],
    });
  }
  return rootStore;
}
