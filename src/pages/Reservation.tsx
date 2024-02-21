import { Button, Descriptions, Row } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";

import { CheckDetails } from "../components/CheckDetails";
// import { reservationItems } from "../data/reservDetails";
import { useStore } from "../store/RootStore";
import { DescriptionsProps } from "antd";
import { ReservationModelType, Status } from "../store/reservationStore";

const Component = () => {
  const params = useParams();
  const rootStore = useStore();
  const { hotels, reservations, getReservations, addReservation } = rootStore;
  // const r = getReservations;
  // console.log("getReservations", getReservations);

  // const arr = r.map((r) => r);
  // console.log(arr);

  const hotel = hotels.filter((hotel) => hotel.hotelId === params.id);
  const {
    hotelId,
    hotelName,
    cost,
    address,
    reviews,
    stars,
    description,
    photos,
  } = hotel[0];
  const [reservState, setReservState] = useState<ReservationModelType>({
    reservId: "0",
    hotelId: hotelId,
    userId: "0",
    totalCost: 0,
    dateIn: "",
    dateOut: "",
    daysCount: 0,
    guestsCount: 0,
    status: Status.Idle,
  });

  // console.log('reservState', reservState)
  const reservationItems: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Дата заезда",
      children: reservState.dateIn,
    },
    {
      key: "2",
      label: "Дата выезда",
      children: reservState.dateOut,
    },
    {
      key: "3",
      label: "Отель",
      children: reservState.hotelId,
    },
    {
      key: "4",
      label: "Бронь на имя",
      children: reservState.userId,
    },
    {
      key: "5",
      label: "Количество гостей",
      children: reservState.guestsCount,
    },
    {
      key: "6",
      label: "Количество дней",
      children: reservState.daysCount,
    },
    {
      key: "7",
      label: "Цена",
      children: `${reservState.totalCost} рублей`,
    },
  ];

  const bookHotel = () => {
    addReservation(reservState);
    // console.log("забронировать");
    console.log(getReservations.map((r) => console.log(r.guestsCount)));
  };
  return (
    <>
      <CheckDetails setter={setReservState}/>
      {reservState.status !== "idle" && (
        <Row align="middle" justify="center">
          <Descriptions
            layout="horizontal"
            bordered
            title="Детали бронирования"
            items={reservationItems}
            style={{ textAlign: "center", margin: "1.5em" }}
          />
        </Row>
      )}

      <Row align="middle" justify="center">
        <Button
          disabled={reservState.status !== "pending"}
          size="large"
          onClick={bookHotel}
          style={{ color: "#111", marginTop: "3em" }}
        >
          Забронировать
        </Button>
      </Row>
    </>
  );
};

export const Reservation = () => {
  return <AppLayout content={<Component />} />;
};
