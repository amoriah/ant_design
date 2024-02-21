import { Button, DatePicker, InputNumber, Row, Tooltip } from "antd";
import { useState } from "react";
import { Content } from "antd/es/layout/layout";
import { useStore } from "../store/RootStore";
import { useParams } from "react-router-dom";
import { ReservationModelType, Status } from "../store/reservationStore";
import { observer } from "mobx-react-lite";

const { RangePicker } = DatePicker;

interface ComponentProps {
  // state: ReservationModelType;
  setter: React.Dispatch<React.SetStateAction<ReservationModelType>>;
}

export const CheckDetails: React.FC<ComponentProps> = observer(
  ({  setter }) => {
    const [checkInDate, setCheckInDate] = useState<any>(null); //убрать any
    const [guests, setGuests] = useState<any>(1);

    const params = useParams();
    const rootStore = useStore();
    const { hotels } = rootStore;

    const hotel = hotels.filter((hotel) => hotel.hotelId === params.id);
    const { hotelId, cost } = hotel[0];

    const dateFormat = "YYYY.MM.DD";

    const handleSearch = () => {
      let days: number[] = [];
      const datesStrFormat = checkInDate.map((data: any) => {
        const y = data.$y;
        const m = data.$M + 1;
        const d = data.$D;
        days.push(d);
        return `${d < 10 ? "0" + d : d}.${m < 10 ? "0" + m : m}.${y}`;
      });
      const daysAmount = days[1] - days[0] + 1;
      const bookCost = daysAmount * cost;

      setter({
        reservId: "1",
        hotelId: hotelId,
        userId: "1",
        totalCost: bookCost,
        dateIn: datesStrFormat[0],
        dateOut: datesStrFormat[1],
        daysCount: daysAmount,
        guestsCount: guests,
        status: Status.Pending,
      });
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
  }
);
