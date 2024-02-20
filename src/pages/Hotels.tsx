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

const Component = observer(() => {
  const rootStore = useStore();
  const { hotels } = rootStore;
  const hotelCards = hotels.map((hotel, i) => {
    return <HotelCard {...hotel} />;
  });
  // console.log("store", store);

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
});
//observer сколько нада?
export const Hotels: React.FC = observer(() => {
  return <AppLayout content={<Component />} />;
});
