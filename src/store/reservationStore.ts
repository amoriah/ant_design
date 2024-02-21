import { Instance, types } from "mobx-state-tree";

export enum Status {
  Idle = "idle",
  Pending = "pending",
  Success = "success",
  Fail = "fail",
  Cancelled = "cancelled",
}

const StatusType = types.enumeration<Status>("Status", Object.values(Status));

export const ReservationModel = types
  .model("ReservationModel", {
    reservId: types.identifier,
    hotelId: types.string,
    userId: types.string,
    totalCost: types.number,
    dateIn: types.string,
    dateOut: types.string,
    daysCount: types.number,
    guestsCount: types.number,
    status: StatusType,
  })
 


export type ReservationModelType = Instance<typeof ReservationModel>;

