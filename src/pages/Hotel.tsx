import { Button, Card, Carousel, Col, Flex, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { IHotelData } from "../types.ts/types";
import { starsFill } from "../utils/utils";
import { imgStyle } from "./HotelsStyle";

const { Text, Title } = Typography;

interface HotelProps {
  hotel: IHotelData;
}

const Component: React.FC<HotelProps> = ({ hotel }) => {
  const navigate = useNavigate();

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const imgCount = [1, 2, 3];

  const operReservationPage = () => {
    navigate(`/hotels/${hotel.id}/reservation`);
  };
  
  return (
    <Content style={{ margin: "0 100px", background: "#fff" }}>
      <Row justify={"space-between"} align={"middle"}>
        <Flex vertical>
          <Title level={2}>{hotel.hotelName}</Title>
          <Text italic>{hotel.address}</Text>
        </Flex>
        <Button
          size="large"
          style={{ background: "#f4d02e" }}
          onClick={operReservationPage}
        >
          Забронировать
        </Button>
      </Row>
      <Carousel
        afterChange={onChange}
        style={{ color: "#111", height: "300px", marginTop: "20px" }}
      >
        {imgCount.map((img, i) => {
          const url = `/hotelsImage/${hotel.id}/${img}.jpeg`;
          return (
            <div key={i}>
              <img src={url} style={imgStyle} alt="image" />
            </div>
          );
        })}
      </Carousel>
      <Col>
        <Title level={3}>Рейтинг {starsFill(hotel.stars)}</Title>
        <Title
          level={4}
          style={{ margin: "20px 0" }}
        >{`Цена: ${hotel.cost} рублей за ночь`}</Title>
        <Title level={4}>Описание</Title>
        <Text>{hotel.description}</Text>
      </Col>
      <Col style={{ marginTop: "20px", textAlign: "center" }}>
        <Title level={5}>Отзывы</Title>
        <Row justify={"space-evenly"} wrap={false}>
          {hotel.reviews.map((review, i) => {
            return (
              <Card
                style={{ whiteSpace: "wrap", width: "250px" }}
                title={review.user}
                key={i}
              >
                <Text>{review.text}</Text>
              </Card>
            );
          })}
        </Row>
      </Col>
    </Content>
  );
};

export const Hotel: React.FC<HotelProps> = ({ hotel }) => {
  // console.log("hotel", hotel);
  return <AppLayout content={<Component hotel={hotel} />} />;
};
