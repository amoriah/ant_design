import { Instance, types } from "mobx-state-tree";
import { hotels as hotelsData } from "../data/hotelsData";
import { HotelModel } from "./hotelsStore";
import { ReservationModel, ReservationModelType } from "./reservationStore";
import { SessionModel } from "./sessionStore";
import { Gender, UserModel, UserModelType } from "./usersStore";

type sessionType = {
  isAuth: boolean;
  session: UserModelType | null;
};

const emptySession: sessionType = {
  isAuth: false,
  session: null,
};

const sessionStorage: sessionType = JSON.parse(
  localStorage.getItem("session") || JSON.stringify(emptySession)
);
const isAuthentication = localStorage.getItem("isAuth") === "true";
// console.log("sessionStorage", sessionStorage);

const usersStorage = JSON.parse(localStorage.getItem("users") || "[]");
// const currentSession = sessionStorage || emptySession;

// console.log("usersStorage", usersStorage);

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
        if (user.length) {
          localStorage.setItem("session", JSON.stringify({ session: user }));
          localStorage.setItem("isAuth", JSON.stringify(true));
          return "success";
        } else return "failed";
      },

      logout() {
        localStorage.setItem("session", JSON.stringify(emptySession));
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
        session: sessionStorage,//  Type 'sessionType' is missing the following properties from type '{ userId: string; login: string; password: string; }': userId, login, password
      },
      users: usersStorage,
      hotels: hotelsData,
      reservations: [],
    });
  }
  return rootStore;
}
