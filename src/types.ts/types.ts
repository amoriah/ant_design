export interface IReviewsData {
  id: number;
  user: string;
  rating: number;
  text?: string;
}

export interface IHotelData {
  id: number;
  hotelName: string;
  cost: number;
  address: string;
  reviews: IReviewsData[];
  stars: number;
  photos: string[];
  description: string;
}
