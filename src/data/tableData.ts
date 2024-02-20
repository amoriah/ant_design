export const dataSource = [
    {
      key: "1",
      bookingDate: "10.10.2021",
      hotelName: "Отель А",
      bookingDates: "15.10.2021 - 20.10.2021",
      price: "$200",
    },
    {
      key: "2",
      bookingDate: "20.11.2021",
      hotelName: "Отель Б",
      bookingDates: "25.11.2021 - 30.11.2021",
      price: "$150",
    },

  ];

  export const columns = [
    {
      title: "Дата брони",
      dataIndex: "bookingDate",
      key: "bookingDate",
    },
    {
      title: "Название отеля",
      dataIndex: "hotelName",
      key: "hotelName",
    },
    {
      title: "Числа бронирования",
      dataIndex: "bookingDates",
      key: "bookingDates",
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
    },
  ];