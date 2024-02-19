import { Content } from "antd/es/layout/layout";
import { Flex, Layout } from "antd";
import { contentFlexStyle, contentStyle, layoutStyle } from "./HotelsStyle";
import { AppHeader } from "../components/AppHeader";
import { FilterBar } from "../components/FilterBar";
import { HotelCard } from "../components/HotelCard";
import { hotels } from "../data/hotelsData";

export const Hotels = () => {

  const hotelCards = hotels.map((hotel, i) => {
    return <HotelCard {...hotel}/>
  })

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <AppHeader />
        <Layout>
          <FilterBar />
          <Content style={contentStyle}>
            <Flex style={contentFlexStyle}>
              {hotelCards}
              {/* <HotelCard /> */}
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </Flex>
  );
};
