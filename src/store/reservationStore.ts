import { Instance, types } from "mobx-state-tree";

export enum Status {
  Idle = "idle",
  Pending = "pending",
  Success = "success",
  Error = "error",
  Cancelled = "cancelled",
}

const StatusType = types.enumeration<Status>("Status", Object.values(Status));

export const ReservationModel = types
  .model("ReservationModel", {
    reservId: types.identifier,
    hotel: types.string,
    userId: types.string,
    totalCost: types.number,
    dateIn: types.string,
    dateOut: types.string,
    daysCount: types.number,
    guestsCount: types.number,
    bookDate: types.Date,
    status: StatusType,
  })
 


export type ReservationModelType = Instance<typeof ReservationModel>;

