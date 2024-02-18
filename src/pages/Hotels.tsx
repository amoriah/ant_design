import { Content } from "antd/es/layout/layout";
import { Flex, Layout } from "antd";
import { contentStyle, layoutStyle } from "./HotelsStyle";
import { AppHeader } from "../components/AppHeader";
import { FilterBar } from "../components/FilterBar";

export const Hotels = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <AppHeader />
        <Layout>
          <FilterBar />
          <Content style={contentStyle}>Content</Content>
        </Layout>
      </Layout>
    </Flex>
  );
};
