import { Button, Divider, Table, Typography } from "antd";

import { observer } from "mobx-react-lite";
import { useState } from "react";
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

export const HistoryTable = observer(() => {
  const [selectedItems, setSelectedItems] = useState<React.Key[]>([]);
  const rootStore = useStore();
  const { getUserBookHistory, deleteBook } = rootStore;
  const bookHistory = getUserBookHistory;

  const data: BookTableType[] = bookHistory.map((book) => {
    const dates = `${book.dateIn}-${book.dateOut}`;
    const dateD = `${book.bookDate.getDate()}`.padStart(2, "0");
    const dateM = `${book.bookDate.getMonth() + 1}`.padStart(2, "0");
    const dateY = book.bookDate.getFullYear();
    return {
      key: book.reservId,
      bookingDate: `${dateD}.${dateM}.${dateY}`,
      hotelName: book.hotel,
      bookingDates: dates,
      price: `${book.totalCost} рублей`,
    };
  });

  const handleDelete = () => {
    deleteBook(selectedItems as string[]);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedItems(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedItems,
    onChange: onSelectChange,
  };
  const hasSelected = selectedItems.length > 0;

  return (
    <>
      <Divider style={{ marginTop: "30px" }}>Активные бронирования</Divider>
      {data.length ? (
        <>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary" onClick={handleDelete} disabled={!hasSelected}>
              Delete
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedItems.length} items` : ""}
            </span>
          </div>
          <Table
            rowSelection={rowSelection}
            dataSource={data}
            columns={columns}
          />
        </>
      ) : (
        <Title level={3} style={{ textAlign: "center" }}>
          Нет активных бронирований
        </Title>
      )}
    </>
  );
});
