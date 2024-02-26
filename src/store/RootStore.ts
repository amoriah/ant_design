import { applySnapshot, getSnapshot, Instance, types } from 'mobx-state-tree';
import { hotels as hotelsData } from '../data/hotelsData';
import { FilterModel } from './filterStore';
import { HotelModel } from './hotelsStore';
import localStore from './localStorage';
import { ReservationModel, ReservationModelType } from './reservationStore';
import { SessionModel } from './sessionStore';
import { UserModel, UserModelType } from './usersStore';
import { getRandomStatus } from '../utils/utils';


const RootStore = types
  .model('RootStore', {
    session: SessionModel,
    users: types.array(UserModel),
    hotels: types.array(HotelModel),
    reservations: types.array(ReservationModel),
    filter: FilterModel,
  })
  .views(self => ({
    get getHotels() {
      return self.hotels.filter(
        hotel =>
          hotel.stars === self.filter.starsCount &&
          hotel.cost >= self.filter.costDiapazon[0] &&
          hotel.cost <= self.filter.costDiapazon[1]
      );
    },
    get getReservations() {
      return self.reservations;
    },
    get isAccess() {
      return self.session.isAuth;
    },
    get getUserBookHistory() {
      return self.reservations.filter(reservation =>
        self.session.session?.reservations.includes(reservation.reservId)
      );
    },
    searchUserByPassword(login: string, password: string) {
      return self.users.filter(
        u => u.login === login && u.password === password
      );
    },
    searchUserById(id: string) {
      return self.users.filter(u => u.userId === id);
    },
    updateUsersStore(user: any) {
      const oldUserIndex = self.users.indexOf(user);
      self.users.splice(oldUserIndex, 1, user);
      localStorage.setItem('users', JSON.stringify(self.users));
    },
  }))
  .actions(self => {
    return {
      login(login: string, password: string) {
        const user = self.searchUserByPassword(login, password);
        if (user[0]) {
          localStorage.setItem('session', JSON.stringify(user[0]));
          localStorage.setItem('isAuthentication', JSON.stringify(true));
          self.session.isAuth = true;
          self.session.session = JSON.parse(
          localStorage.getItem("session") || "null"
          );
          return 'success';
        } else return 'failed';
      },
      signup(userId: string, login: string, password: string) {
        if (!self.searchUserByPassword(login, password).length) {
          self.users.push({ userId, login, password });
          localStorage.setItem('users', JSON.stringify(self.users));
          return 'success';
        } else return 'failed';
      },
      logout() {
        localStorage.setItem('session', JSON.stringify(null));
        localStorage.setItem('isAuthentication', JSON.stringify(false));
      },

      book(reservation: ReservationModelType) {
        const user = self.searchUserById(self.session.session?.userId!);

        reservation.status = getRandomStatus();
        if (reservation.status === 'error') return 'error';

        self.reservations.push({ ...reservation });
        localStorage.setItem('reservations', JSON.stringify(self.reservations));

        self.session.session?.reservations.push(reservation.reservId);
        localStorage.setItem('session', JSON.stringify(self.session.session));

        user[0].reservations.push(reservation.reservId);
        self.updateUsersStore(user[0]);

        return 'success';
      },
      deleteBook(ids: string[]) {
        const user = self.searchUserById(self.session.session?.userId!);
        ids.forEach(id => {
          const book = self.reservations.filter(r => r.reservId === id);
          const indexInReserv = self.reservations.indexOf(book[0]);
          const indexInUser = user[0].reservations.indexOf(id);
          self.reservations.splice(indexInReserv, 1);
          user[0].reservations.splice(indexInUser, 1);

          localStorage.setItem(
            'reservations',
            JSON.stringify(self.reservations)
          );
          localStorage.setItem('session', JSON.stringify(user[0]));
          self.updateUsersStore(user[0]);
        });
      },

      setAccountValue(newValue: string, id: string, key: keyof UserModelType) {
        const user = self.searchUserById(id);

        applySnapshot(user[0], { ...getSnapshot(user[0]), [key]: newValue });
        localStorage.setItem('session', JSON.stringify(user[0]));
        self.session.session = JSON.parse(
          localStorage.getItem('session') || 'null'
        );
        self.updateUsersStore(user[0]);
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
        isAuth: localStore.isAuthentication,
        session: localStore.currentSession,
      },
      users: localStore.usersStorage,
      hotels: hotelsData,
      reservations: localStore.reservationsStore,
      filter: {
        starsCount: 4,
        costDiapazon: [300, 4000],
      },
    });
  }
  return rootStore;
}
