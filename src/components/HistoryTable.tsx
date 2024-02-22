import { Divider, Table, Typography } from "antd";
import { columns } from "../data/tableData";
import { useStore } from "../store/RootStore";

interface BookTableType {
  key: string;
  bookingDate: string;
  hotelName: string;
  bookingDates: string;
  price: string;
}

const { Title } = Typography;

export const HistoryTable = () => {
  const rootStore = useStore();
  const { getUserBookHistory, hotels } = rootStore;
  const bookHistory = getUserBookHistory;

  const data: BookTableType[] = bookHistory.map((book) => {
    const dates = `${book.dateIn}-${book.dateOut}`;
    const hotel = hotels.filter((h) => book.hotelId === h.hotelId);
    const dateD = `${book.bookDate.getDate()}`.padStart(2, '0');
    const dateM = `${book.bookDate.getMonth() + 1}`.padStart(2, '0');
    const dateY = book.bookDate.getFullYear();
    return {
      key: book.reservId,
      bookingDate: `${dateD}.${dateM}.${dateY}`,
      hotelName: hotel[0].hotelName,
      bookingDates: dates,
      price: `${book.totalCost} рублей`,
    };
  });

  return (
    <>
      <Divider style={{ marginTop: "30px" }}>История бронирований</Divider>
      {data.length ? (
        <Table dataSource={data} columns={columns} />
      ) : (
        <Title level={3} style={{ textAlign: "center" }}>
          История пуста
        </Title>
      )}
    </>
  );
};
