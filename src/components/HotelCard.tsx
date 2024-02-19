import { Card, Col, Flex, Row, Typography } from "antd";
import { hotelCardStyle } from "../pages/HotelsStyle";
import { IHotelData } from "../types.ts/types";
import { starsFill } from "../utils/utils";

const { Text, Title } = Typography;

export const HotelCard: React.FC<IHotelData> = ({
  id,
  hotelName,
  cost,
  address,
  reviews,
  stars,
  photos,
}) => {
  //вынести в общую функцию дубликат это

  return (
    <Card style={hotelCardStyle} key={id}>
      <Row wrap={false} style={{ width: "100%" }}>
        <Col style={{ width: "40%" }}>
          <img src="./hotelsImage/1/1.jpeg" width="300px" height="180px" />
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
