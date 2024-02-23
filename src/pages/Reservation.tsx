import { Button, Descriptions, message, Row, DescriptionsProps } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import components from "../components";
import { useStore } from "../store/rootStore";
import { useState } from "react";

import { ReservationModelType, Status } from "../store/reservationStore";

const Component = () => {
  const navigate = useNavigate();
  const params = useParams();
  const rootStore = useStore();
  const { hotels, book } = rootStore;

  const hotel = hotels.filter((hotel) => hotel.hotelId === params.id);
  const { hotelName } = hotel[0];
  const [reservState, setReservState] = useState<ReservationModelType>({
    reservId: "0",
    hotel: hotelName,
    userId: "0",
    totalCost: 0,
    dateIn: "",
    dateOut: "",
    daysCount: 0,
    guestsCount: 0,
    status: Status.Idle,
    bookDate: new Date(),
  });

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
      children: reservState.hotel,
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
  const [messageApi, contextHolder] = message.useMessage();

  const bookHotel = () => {
    const result = book(reservState);
    const message: string = {
      success: "Бронирование подтверждено",
      error: "Бронирование отклонено",
    }[result];
    messageApi
      .open({
        type: result,
        content: message,
      })
      .then(() => (result === "success" ? navigate("/account") : navigate(0)));
  };
  return (
    <>
      <components.CheckDetails setter={setReservState} />
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
        <>
          {contextHolder}
          <Button
            disabled={reservState.status !== "pending"}
            size="large"
            onClick={bookHotel}
            style={{ color: "#111", marginTop: "3em" }}
          >
            Забронировать
          </Button>
        </>
      </Row>
    </>
  );
};

export const Reservation = () => {
  return <components.AppLayout content={<Component />} />;
};
