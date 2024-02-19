import { Card, Col, Flex, Row, Typography } from "antd";
import { hotelCardStyle } from "../pages/HotelsStyle";
import { IHotelData } from "../types.ts/types";

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
  return (
    <Card style={hotelCardStyle} key={id}>
      <Row wrap={false}>
        <Col span={14} style={{ border: "1px solid red",  width: "40%" }}>
          <img src="./hotelsImage/1/1.jpeg" width="250px" height="180px" />
        </Col>
        <Col span={14} style={{ border: "1px solid red", width: "40%" }}>
          <Flex vertical justify={"space-between"} style={{ height: "100%" }}>
            <Title level={4}>{hotelName}</Title>
            <Text italic>{address}</Text>
            <p>{stars}</p>
          </Flex>
        </Col>
        <Col span={6} style={{ border: "1px solid red", width: "20%" }}>
          <Text>
            {"Цена за ночь: "}
            {`${cost} рублей`}
          </Text>
          <p>{`Отзывы: ${reviews.length} `}</p>
        </Col>
      </Row>
    </Card>
  );
};
