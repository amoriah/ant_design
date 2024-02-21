// import { hotels as hotelsData } from "../data/hotelsData";
// import { IHotelData } from "../types.ts/types";
import { Instance, types } from "mobx-state-tree";
// import { genActionStyle } from "antd/es/alert/style";

const ReviewModel = types.model({
  id: types.identifier,
  user: types.string,
  rating: types.number,
  text: types.optional(types.string, ""),
});

export const HotelModel = types
  .model("HotelModel", {
    hotelId: types.identifier,
    hotelName: types.string,
    cost: types.number,
    address: types.string,
    reviews: types.array(ReviewModel),
    stars: types.number,
    photos: types.array(types.string),
    description: types.string,
  });
//   .actions(() => {
//     function cons() {
//       console.log("cons");
//     }
//     return { cons };
//   });

export type HotelModelType = Instance<typeof HotelModel>;
export type ReviewModelType = Instance<typeof ReviewModel>;
