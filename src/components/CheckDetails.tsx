import { Button, DatePicker, InputNumber, Row, Tooltip } from "antd";
import { useState } from "react";
import { Content } from "antd/es/layout/layout";

const { RangePicker } = DatePicker;

export const CheckDetails = () => {
  const [checkInDate, setCheckInDate] = useState<any>(null);
  const [guests, setGuests] = useState<any>(1);

  const handleSearch = () => {
    console.log("in:", checkInDate);
    console.log("Guests:", guests);
  };
  return (
    <Content
      style={{
        display: "flex",
        // border: "1px solid green",
        justifyContent: "center",
        margin: '3em'
      }}
    >
      <Row>
        <RangePicker
          size="large"
          placeholder={["Дата заезда", "Дата выезда"]}
          onChange={(date) => setCheckInDate(date)}
          style={{ marginRight: "10px" }}
        />
        <Tooltip placement="top" title={"количество гостей"}>
          <InputNumber
            size="large"
            min={1}
            max={5}
            defaultValue={1}
            onChange={(value) => setGuests(value)}
            style={{ marginRight: "10px" }}
          />
        </Tooltip>
        <Button
          size="large"
          type="primary"
          onClick={handleSearch}
          style={{ background: "#f4d02e", color: "#111" }}
        >
          Выбрать
        </Button>
      </Row>
    </Content>
  );
};
