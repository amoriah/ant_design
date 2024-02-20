import { Instance, types } from "mobx-state-tree";
import { hotels as hotelsData } from "../data/hotelsData";
import { HotelModel } from "./hotelsStore";
import { ReservationModel } from "./reservationStore";

const RootStore = types
  .model("RootStore", {
    hotels: types.array(HotelModel),
    reservations: types.array(ReservationModel),
  })
  .views((self) => ({
    get getHotels() {
      return self.hotels;
    },
  }))
  .actions(() => ({}));

export type RootStoreType = Instance<typeof RootStore>;

let rootStore: RootStoreType;
export function useStore() {
  if (!rootStore) {
    rootStore = RootStore.create({
      hotels: hotelsData,
      reservations: [],
    });
  }
  return rootStore;
}
