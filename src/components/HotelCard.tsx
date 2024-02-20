import { Card, Col, Flex, Row, Typography } from "antd";
import { useNavigate } from "react-router";
import { hotelCardStyle } from "../pages/HotelsStyle";
import { HotelModelType } from "../store/hotelsStore";
import { IHotelData } from "../types.ts/types";
import { starsFill } from "../utils/utils";

const { Text, Title } = Typography;

export const HotelCard: React.FC<HotelModelType> = ({
  id,
  hotelName,
  cost,
  address,
  reviews,
  stars,
  photos,
}) => {
  //вынести в общую функцию дубликат это
  const navigate = useNavigate();
  const openHotelPage = () => {
    navigate(`/hotels/${id}`);
  };

  const image = photos[0];

  return (
    <Card hoverable style={hotelCardStyle} key={id} onClick={openHotelPage}>
      <Row wrap={false} style={{ width: "100%" }}>
        <Col style={{ width: "40%" }}>
          <img src={image} width="300px" height="180px" />
        </Col>
        <Col style={{ width: "40%" }}>
          <Flex vertical justify={"space-between"} style={{ height: "100%" }}>
            <Title level={4}>{hotelName}</Title>
            <Text italic>{`Адрес: ${address}`}</Text>
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
