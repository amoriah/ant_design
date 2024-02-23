import { Button, Descriptions, message, Row } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";

import { CheckDetails } from "../components/CheckDetails";

import { useStore } from "../store/RootStore";
import { DescriptionsProps } from "antd";
import { ReservationModelType, Status } from "../store/reservationStore";

const Component = () => {
  const navigate = useNavigate();
  const params = useParams();
  const rootStore = useStore();
  const { hotels, book } = rootStore;

  const hotel = hotels.filter((hotel) => hotel.hotelId === params.id);
  const { hotelId } = hotel[0];
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
      children: reservState.hotelId,
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
    const bookResult = book(reservState);
    const status = bookResult === "success" ? "success" : "error";
    const message: string = {
      success: "Бронирование подтверждено",
      error: "Бронирование отклонено",
    }[status];
    messageApi
      .open({
        type: status,
        content: message,
      })
      .then(() => (status === "success" ? navigate("/account") : navigate(0)));
  };
  return (
    <>
      <CheckDetails setter={setReservState} />
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
  return <AppLayout content={<Component />} />;
};
