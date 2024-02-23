import { layoutStyle } from "../style/HotelsStyle";
import { AppHeader } from "./AppHeader";
import { Flex, Layout } from "antd";
import { ReactNode } from "react";

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
            background: "#fff",
          }}
        >
          {content}
        </Layout>
      </Layout>
    </Flex>
  );
};
