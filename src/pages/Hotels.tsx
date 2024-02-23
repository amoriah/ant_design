import { AppLayout } from "../components/AppLayout";
import { Content } from "antd/es/layout/layout";
import { Flex } from "antd";
import { contentFlexStyle, contentStyle } from "./HotelsStyle";
import { FilterBar } from "../components/FilterBar";
import { HotelCard } from "../components/HotelCard";
import Search from "antd/es/input/Search";
import type { SearchProps } from "antd/es/input/Search";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/RootStore";
import { useState } from "react";

const Component = observer(() => {
  const [addres, setAddres] = useState("");
  const rootStore = useStore();
  const { getHotels } = rootStore;
  const fillteredHotels = getHotels.filter((hotel) =>
    hotel.address.toLowerCase().includes(addres.toLowerCase())
  );
  const hotelCards = fillteredHotels.map((hotel, i) => {
    return <HotelCard {...hotel} key={i} />;
  });
  const onSearch: SearchProps["onSearch"] = (value) => {
    setAddres(value);
  };

  return (
    <>
      <FilterBar />
      <Content style={contentStyle}>
        <Flex style={contentFlexStyle}>
          <Search
            placeholder="Address"
            allowClear
            onSearch={onSearch}
            style={{ width: "70%", marginRight: "15px" }}
            size="large"
          />

          {hotelCards}
        </Flex>
      </Content>
    </>
  );
});

export const Hotels: React.FC = () => {
  return <AppLayout content={<Component />} />;
};
