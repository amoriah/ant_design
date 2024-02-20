import { Button, Descriptions, Row } from "antd";
import { useParams } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";

import { CheckDetails } from "../components/CheckDetails";
import { reservationItems } from "../data/reservDetails";
import { useStore } from "../store/RootStore";

const Component = () => {
  const params = useParams();
  const rootStore = useStore();
  const { hotels } = rootStore;


  const hotel = hotels.filter((hotel) => hotel.id === params.id);
  const { id, hotelName, cost, address, reviews, stars, description, photos } =
    hotel[0];

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
