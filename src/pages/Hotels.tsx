import { AppLayout } from "../components/AppLayout";
import { Content } from "antd/es/layout/layout";
import { Flex } from "antd";
import { contentFlexStyle, contentStyle } from "./HotelsStyle";
import { FilterBar } from "../components/FilterBar";
import { HotelCard } from "../components/HotelCard";
import { hotels } from "../data/hotelsData";
import Search from "antd/es/input/Search";
import type { SearchProps } from "antd/es/input/Search";

const Component = () => {
  const hotelCards = hotels.map((hotel, i) => {
    return <HotelCard {...hotel} />;
  });

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

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
};

export const Hotels = () => {
  return <AppLayout content={<Component />} />;
};
