import { Button, DatePicker, InputNumber, Row, Tooltip } from "antd";
import { ReservationModelType, Status } from "../store/reservationStore";
import { Content } from "antd/es/layout/layout";
import { useStore } from "../store/RootStore";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const { RangePicker } = DatePicker;

interface ComponentProps {
  setter: React.Dispatch<React.SetStateAction<ReservationModelType>>;
}

export const CheckDetails: React.FC<ComponentProps> = observer(({ setter }) => {
  const params = useParams();
  const rootStore = useStore();

  const [dates, setDates] = useState<any>(null);
  const [guests, setGuests] = useState<any>(1);
  const { hotels, session } = rootStore;
  const hotel = hotels.filter((hotel) => hotel.hotelId === params.id);
  const { hotelName, cost } = hotel[0];
  const dateFormat = "YYYY.MM.DD";

  const handleSearch = () => {
    const datesStrFormat = dates.map((data: any) => {
      const y = data.$y;
      const m = data.$M + 1;
      const d = data.$D;

      return `${d < 10 ? "0" + d : d}.${m < 10 ? "0" + m : m}.${y}`;
    });

    const timeDiff = dates[1].valueOf() - dates[0].valueOf();
    const daysAmount = Math.round(timeDiff / (1000 * 60 * 60 * 24)) + 1;
    const bookCost = daysAmount * cost;

    setter({
      reservId: uuidv4(),
      hotel: hotelName,
      userId: session.session?.userId!,
      totalCost: bookCost,
      dateIn: datesStrFormat[0],
      dateOut: datesStrFormat[1],
      daysCount: daysAmount,
      guestsCount: guests,
      status: Status.Pending,
      bookDate: new Date(),
    });
  };

  const disabledDate = (current: any) => {
    const today = new Date();
    today.setHours(0);
    return current && current < today;
  };

  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "3em",
      }}
    >
      <Row>
        <RangePicker
          size="large"
          format={dateFormat}
          placeholder={["Дата заезда", "Дата выезда"]}
          onChange={(date) => setDates(date)}
          style={{ marginRight: "10px" }}
          disabledDate={disabledDate}
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
          disabled={!dates}
          size="large"
          type="primary"
          onClick={handleSearch}
          style={{ background: "#f4d02e", color: "#111" }}
        >
          Рассчитать
        </Button>
      </Row>
    </Content>
  );
});
