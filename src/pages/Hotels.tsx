import { Content } from "antd/es/layout/layout";
import type { SearchProps } from "antd/es/input/Search";
import { useStore } from "../store/RootStore";
import { observer } from "mobx-react-lite";
import Search from "antd/es/input/Search";
import * as style from "../style/HotelsStyle";
import components from "../components";
import { useState } from "react";
import { Flex } from "antd";
import { v4 as uuidv4 } from "uuid";

const Component = observer(() => {
  const [address, setAddress] = useState("");

  const rootStore = useStore();
  const { getHotels } = rootStore;

  const fillteredHotels = getHotels.filter((hotel) =>
    hotel.address.toLowerCase().includes(address.toLowerCase())
  );
  const hotelCards = fillteredHotels.map((hotel) => {
    return <components.HotelCard {...hotel} key={uuidv4()} />;
  });
  const onSearch: SearchProps["onSearch"] = (value) => {
    setAddress(value);
  };

  return (
    <>
      <components.FilterBar />
      <Content style={style.contentStyle}>
        <Flex style={style.contentFlexStyle}>
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
  return <components.AppLayout content={<Component />} />;
};
