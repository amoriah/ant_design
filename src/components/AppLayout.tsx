import { Flex, Layout } from "antd";
import { ReactNode } from "react";
import { layoutStyle } from "../pages/HotelsStyle";
import { AppHeader } from "./AppHeader";

interface LayoutProps {
  content: ReactNode;
}

export const AppLayout: React.FC<LayoutProps> = ({ content }) => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <AppHeader />
        <Layout
          style={{
            marginTop: "96px",
            // border: "1px solid green",
            background: "#fff",
          }}
        >
          {content}
        </Layout>
      </Layout>
    </Flex>
  );
};
