import { Button, Card, Carousel, Col, Flex, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { starsFill } from "../utils/utils";
import { carouselStyle, imgStyle } from "../style/HotelsStyle";
import { useParams } from "react-router";
import { useStore } from "../store/rootStore";
import { v4 as uuidv4 } from "uuid";

const { Text, Title } = Typography;

const Component = () => {
  const navigate = useNavigate();
  const params = useParams();
  const rootStore = useStore();
  const { hotels } = rootStore;

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

  const operReservationPage = () => {
    navigate(`/hotels/${hotelId}/reservation`);
  };

  return (
    <Content style={{ margin: "0 100px", background: "#fff", }}>
      <Row justify={"space-between"} align={"middle"}>
        <Flex vertical>
          <Title level={2}>{hotelName}</Title>
          <Text italic>{address}</Text>
        </Flex>
        <Button
          size="large"
          style={{ background: "#f4d02e" }}
          onClick={operReservationPage}
        >
          Забронировать
        </Button>
      </Row>
      <Carousel style={carouselStyle}>
        {photos.map((img) => (
          <div key={uuidv4()}>
            <img src={img} style={imgStyle} alt="hotel" />
          </div>
        ))}
      </Carousel>
      <Col>
        <Title level={3}>Рейтинг {starsFill(stars)}</Title>
        <Title
          level={4}
          style={{ margin: "20px 0" }}
        >{`Цена: ${cost} рублей за ночь`}</Title>
        <Title level={4}>Описание</Title>
        <Text>{description}</Text>
      </Col>
      <Col style={{ marginTop: "20px", textAlign: "center" }}>
        <Title level={5}>Отзывы</Title>
        <Row justify={"space-evenly"} wrap={false}>
          {reviews.map((review) => (
            <Card
              style={{ whiteSpace: "wrap", width: "250px" }}
              title={review.user}
              key={uuidv4()}
            >
              <Text>{review.text}</Text>
            </Card>
          ))}
        </Row>
      </Col>
    </Content>
  );
};

export const Hotel = () => {
  return <AppLayout content={<Component />} />;
};
