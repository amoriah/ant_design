import { Button, Descriptions, Row } from "antd";
import { AppLayout } from "../components/AppLayout";

import { CheckDetails } from "../components/CheckDetails";
import { reservationItems } from "../data/reservDetails";

const Component = () => {
  const bookHotel = () => {
    console.log("забронировать");
  };
  return (
    <>
      <CheckDetails />
      <Row align="middle" justify="center">
        <Descriptions
          layout="horizontal"
          bordered
          title="Детали бронирования"
          items={reservationItems}
          style={{ textAlign: "center", margin: "1.5em" }}
        />
      </Row>
      <Row align="middle" justify="center">
        <Button
          disabled
          size="large"
          onClick={bookHotel}
          style={{ color: "#111", marginTop: "3em", }}
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
