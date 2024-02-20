import { Button, Card, Carousel, Col, Flex, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { starsFill } from "../utils/utils";
import { imgStyle } from "./HotelsStyle";
import { useParams } from "react-router";
import { useStore } from "../store/RootStore";

const { Text, Title } = Typography;

const Component = (
 
) => {
  const navigate = useNavigate();
  const params = useParams();
  const rootStore = useStore();
  const { hotels } = rootStore;


  const hotel = hotels.filter((hotel) => hotel.id === params.id);
  const { id, hotelName, cost, address, reviews, stars, description, photos } =
    hotel[0];



  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const operReservationPage = () => {
    navigate(`/hotels/${id}/reservation`);
  };

  return (
    <Content style={{ margin: "0 100px", background: "#fff" }}>
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
      <Carousel
        afterChange={onChange}
        style={{ color: "#111", height: "300px", marginTop: "20px" }}
      >
        {photos.map((img, i) => (
          <div key={i}>
            <img src={img} style={imgStyle} alt="image" />
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
          {reviews.map((review, i) => (
            <Card
              style={{ whiteSpace: "wrap", width: "250px" }}
              title={review.user}
              key={i}
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
