import { Card, Col, Flex, Row, Typography } from "antd";
import { hotelCardStyle } from "../style/HotelsStyle";
import { HotelModelType } from "../store/hotelsStore";
import { useNavigate } from "react-router";
import { starsFill } from "../utils/utils";

const { Text, Title } = Typography;

export const HotelCard: React.FC<HotelModelType> = ({
  hotelId,
  hotelName,
  cost,
  address,
  reviews,
  stars,
  photos,
}) => {
  const navigate = useNavigate();

  const openHotelPage = () => {
    navigate(`/hotels/${hotelId}`);
  };

  const image = photos[0];
  //border: "1px solid red",
  return (
    <Card
      hoverable
      style={hotelCardStyle}
      key={hotelId}
      onClick={openHotelPage}
    >
      <Row wrap={false} style={{ width: "100%" }}>
        <Col style={{ width: "40%", display: "flex", flexDirection: "column" }}>
          <img src={image} width="280px" height="150px" alt="hotel" />
          <Text italic style={{ display: "block", width: "280px" }}>
            {address}
          </Text>
        </Col>
        <Col style={{ width: "40%" }}>
          <Flex vertical justify={"space-around"} style={{ height: "100%" }}>
            <Title level={4}>{hotelName}</Title>
            <p>{starsFill(stars)}</p>
          </Flex>
        </Col>
        <Col style={{ width: "20%" }}>
          <Flex vertical justify={"space-between"} style={{ height: "100%" }}>
            <div>
              <p>Цена за ночь: </p>
              <Text
                strong
                style={{ fontSize: "24px" }}
              >{`${cost} рублей`}</Text>
            </div>
            <p>{`Отзывы: ${reviews.length} `}</p>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
};
