import { IHotelData } from "../types.ts/types";

export const hotels: IHotelData[] = [
  {
    id: 1,
    hotelName: "Luxury Palace",
    cost: 300,
    address: "123 Main Street, New York",
    reviews: [
      { id: 1, user: "Alice", rating: 4 },
      { id: 2, user: "Bob", rating: 5 },
    ],
    stars: 5,
    photos: ["image1.jpg", "image2.jpg"],
    description: "A luxurious hotel with top-notch service and amenities.",
  },
  {
    id: 2,
    hotelName: "Seaside Retreat",
    cost: 150,
    address: "456 Beach Avenue, Miami",
    reviews: [
      { id: 3, user: "Claire", rating: 4 },
      { id: 4, user: "David", rating: 3 },
    ],
    stars: 4,
    photos: ["image3.jpg", "image4.jpg"],
    description: "A peaceful retreat by the ocean, perfect for relaxation.",
  },
  {
    id: 3,
    hotelName: "Mountain Lodge",
    cost: 200,
    address: "789 Pine Street, Aspen",
    reviews: [
      { id: 5, user: "Emily", rating: 5 },
      { id: 6, user: "Frank", rating: 4 },
    ],
    stars: 4,
    photos: ["image5.jpg", "image6.jpg"],
    description:
      "Cozy lodge nestled in the mountains, ideal for nature lovers.",
  },
  {
    id: 4,
    hotelName: "Sunset Beach Resort",
    cost: 150,
    address: "123 Ocean Avenue, Miami, FL",
    reviews: [
      { id: 7, user: "Alice", rating: 4 },
      { id: 8, user: "Bob", rating: 3 },
    ],
    stars: 4,
    photos: ["photo1.jpg", "photo2.jpg"],
    description:
      "A luxurious beachfront resort with stunning views of the sunset.",
  },
  {
    id: 5,
    hotelName: "Mountain Lodge Retreat",
    cost: 120,
    address: "456 Mountain Road, Aspen, CO",
    reviews: [
      { id: 9, user: "Charlie", rating: 5 },
      { id: 10, user: "Diane", rating: 4 },
    ],
    stars: 5,
    photos: ["photo3.jpg", "photo4.jpg"],
    description:
      "Escape to the mountains and enjoy a peaceful getaway at our cozy lodge.",
  },
  {
    id: 6,
    hotelName: "City Lights Hotel",
    cost: 100,
    address: "789 City Street, New York, NY",
    reviews: [
      { id: 11, user: "Emma", rating: 4 },
      { id: 12, user: "Frank", rating: 3 },
    ],
    stars: 4,
    photos: ["photo5.jpg", "photo6.jpg"],
    description:
      "Experience the vibrant city life at our modern and stylish hotel in the heart of the city.",
  },
  {
    id: 7,
    hotelName: "Sunset Beach Resort",
    cost: 150,
    address: "123 Ocean Avenue, Miami Beach, FL",
    reviews: [
      {
        rating: 4,
        id: 11,
        user: "Emma",
      },
      {
        rating: 5,
        id: 11,
        user: "Emma",
      },
    ],
    stars: 4,
    photos: ["beach.jpg", "pool.jpg", "room.jpg"],
    description: "Experience luxury at our beachfront resort.",
  },
  {
    id: 8,
    hotelName: "Mountain View Lodge",
    cost: 100,
    address: "456 Mountain Road, Aspen, CO",
    reviews: [
      {
        rating: 3,
        id: 11,
        user: "Emma",
      },
      {
        rating: 4,
        id: 11,
        user: "Emma",
      },
    ],
    stars: 3,
    photos: ["mountain.jpg", "lodge.jpg"],
    description: "Escape to the mountains and relax in our rustic lodge.",
  },
  {
    id: 9,
    hotelName: "City Lights Inn",
    cost: 80,
    address: "789 Downtown Street, New York, NY",
    reviews: [
      {
        rating: 5,
        id: 11,
        user: "Emma",
      },
      {
        rating: 4,
        id: 11,
        user: "Emma",
      },
    ],
    stars: 4,
    photos: ["city.jpg", "lights.jpg", "rooms.jpg"],
    description: "Stay in the heart of the city at our cozy inn.",
  },
  {
    id: 10,
    hotelName: "Sunset Paradise Resort",
    cost: 150,
    address: "123 Ocean Avenue, Miami",
    reviews: [
      { rating: 4.5, id: 12, user: "Frank" },
      { rating: 3.8, id: 12, user: "Frank" },
    ],
    stars: 4,
    photos: ["image1.jpg", "image2.jpg", "image3.jpg"],
    description: "Luxurious beachfront resort with stunning sunset views",
  },
  {
    id: 11,
    hotelName: "Mountain Retreat Lodge",
    cost: 120,
    address: "456 Forest Road, Colorado",
    reviews: [
      { rating: 4.2, id: 12, user: "Frank" },
      { rating: 4.0, id: 12, user: "Frank" },
    ],
    stars: 3,
    photos: ["image4.jpg", "image5.jpg", "image6.jpg"],
    description:
      "Rustic lodge nestled in the mountains, perfect for nature lovers",
  },
  {
    id: 12,
    hotelName: "City Lights Hotel",
    cost: 200,
    address: "789 Downtown Street, New York",
    reviews: [
      { rating: 4.8, id: 12, user: "Frank" },
      { rating: 4.5, id: 12, user: "Frank" },
    ],
    stars: 5,
    photos: ["image7.jpg", "image8.jpg", "image9.jpg"],
    description:
      "Modern hotel in the heart of the city, with rooftop bar and panoramic views",
  },
  {
    id: 13,
    hotelName: "Sunset Paradise",
    cost: 150,
    address: "123 Ocean Avenue, Miami, FL",
    reviews: [
      { id: 1, user: "Alice", rating: 4 },
      { id: 2, user: "Bob", rating: 5 },
      { id: 3, user: "Charlie", rating: 4 },
    ],
    stars: 4,
    photos: ["sunset.jpg", "pool.jpg", "lobby.jpg"],
    description:
      "Experience paradise at Sunset Paradise hotel, located right by the beach.",
  },
  {
    id: 14,
    hotelName: "Mountain Retreat",
    cost: 120,
    address: "456 Mountain Road, Aspen, CO",
    reviews: [
      { id: 1, user: "David", rating: 3 },
      { id: 2, user: "Eve", rating: 4 },
      { id: 3, user: "Frank", rating: 5 },
    ],
    stars: 3,
    photos: ["mountain.jpg", "fireplace.jpg", "view.jpg"],
    description:
      "Escape to the tranquil Mountain Retreat for a peaceful getaway amidst nature.",
  },
  {
    id: 15,
    hotelName: "Ocean Blue Resort",
    cost: 150,
    address: "123 Beach St, Miami",
    reviews: [
      { id: 1, user: "Alice", rating: 4 },
      { id: 2, user: "Bob", rating: 5 },
      { id: 3, user: "Charlie", rating: 4 },
    ],
    stars: 16,
    photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
    description:
      "A luxurious beachfront resort with stunning views of the ocean.",
  },
  {
    id: 17,
    hotelName: "Mountain Retreat Inn",
    cost: 100,
    address: "456 Mountain Rd, Aspen",
    reviews: [
      { id: 1, user: "David", rating: 3 },
      { id: 2, user: "Eve", rating: 2 },
      { id: 3, user: "Frank", rating: 4 },
    ],
    stars: 3,
    photos: ["photo4.jpg", "photo5.jpg", "photo6.jpg"],
    description:
      "A cozy inn nestled in the mountains, perfect for a relaxing getaway.",
  },
  {
    id: 18,
    hotelName: "Sunset Beach Resort",
    cost: 150,
    address: "123 Ocean Avenue, Miami, FL",
    reviews: [
      { id: 1, user: "Alice", rating: 4 },
      { id: 2, user: "Bob", rating: 5 },
      { id: 3, user: "Charlie", rating: 4 },
    ],
    stars: 4,
    photos: ["beach.jpg", "pool.jpg", "room.jpg"],
    description: "Great beachfront resort with excellent amenities.",
  },
  {
    id: 19,
    hotelName: "Mountain View Lodge",
    cost: 120,
    address: "456 Main Street, Aspen, CO",
    reviews: [
      { id: 1, user: "David", rating: 5 },
      { id: 2, user: "Emma", rating: 4 },
      { id: 3, user: "Frank", rating: 4 },
    ],
    stars: 3,
    photos: ["mountain.jpg", "lodge.jpg", "outdoor.jpg"],
    description:
      "Cozy lodge in the heart of the mountains for a peaceful getaway.",
  },
  {
    id: 20,
    hotelName: "Ocean View Resort",
    cost: 150,
    address: "123 Ocean Drive, Miami, FL",
    reviews: [
      { id: 1, user: "Alice", rating: 4 },
      { id: 2, user: "Bob", rating: 5 },
      { id: 3, user: "Charlie", rating: 4 },
    ],
    stars: 4,
    photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
    description: "A luxurious beachfront resort with stunning ocean views.",
  },
  {
    id: 21,
    hotelName: "Mountain Lodge Retreat",
    cost: 120,
    address: "456 Mountain Road, Aspen, CO",
    reviews: [
      { id: 1, user: "David", rating: 4 },
      { id: 2, user: "Emily", rating: 3 },
      { id: 3, user: "Frank", rating: 5 },
    ],
    stars: 3,
    photos: ["photo4.jpg", "photo5.jpg", "photo6.jpg"],
    description:
      "A cozy lodge nestled in the mountains, perfect for a relaxing getaway.",
  },
];

/*
сгенерируй объект json из 20 объектов с такими свойствами:
id: number
hotelName: string
cost: number
address: string
reviews: [{id: number, user: string, rating: number}*3]
stars: number
photos: string[]
description: string

значения свойств напиши самостоятельно, пусть они будут рандомными, но они должны соответствовать типу свойства
  */
