import { Instance, types } from "mobx-state-tree";

const ReviewModel = types.model("ReviewModel", {
  id: types.identifier,
  user: types.string,
  rating: types.number,
  text: types.optional(types.string, ""),
});

export const HotelModel = types.model("HotelModel", {
  hotelId: types.identifier,
  hotelName: types.string,
  cost: types.number,
  address: types.string,
  reviews: types.array(ReviewModel),
  stars: types.number,
  photos: types.array(types.string),
  description: types.string,
});

export type HotelModelType = Instance<typeof HotelModel>;
export type ReviewModelType = Instance<typeof ReviewModel>;
