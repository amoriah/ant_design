import { Instance, types } from "mobx-state-tree";

type StatusType = "success" | "fail" | "loading" | "idle";

export const ReservationModel = types.model("ReservationModel", {
  id: types.identifier,
  hotelId: types.string,
  uerId: types.string,
  totalCost: types.number,
  dateIn: types.string,
  dateOut: types.string,
  daysCount: types.number,
  status: types.string,
});

export type HotelModelType = Instance<typeof ReservationModel>;
/*
локально через хук создать объект и заполнять его. не отображать данные пока объект пустой
по кнопке выбрать заполнять объект
если обект не пустой кнопка забронировать доступна
при нажатии на кнопку забронировать дается рандомный статус
пока Reservation дут
*/
