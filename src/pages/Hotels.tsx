import { Flex, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

export const Hotels = () => {
  const layoutStyle = {
    // overflow: "hidden",
    width: "calc(50% - 8px)",
    // maxWidth: "calc(50% - 8px)",
  };

  const headerStyle: React.CSSProperties = {
    // textAlign: "center",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1,
    // width: "100%",
    // display: "flex",
    backgroundColor: "#f4d02e",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    height: "100vh",
    overflow: "auto",
    position: "fixed",
    paddingTop: "80px",
    left: 0,
    top: 0,
    bottom: 0,
    // lineHeight: "100vh",
    color: "#111",
    backgroundColor: "#f2f2f2",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    height: "100vh",
    // lineHeight: "100vh",
    color: "#111",
    backgroundColor: "#e09f9f",
  };
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider width="25%" style={siderStyle}>
            <Flex vertical>
              Звезды
              <Checkbox onChange={onChange}>5</Checkbox>
              <Checkbox onChange={onChange}>4</Checkbox>
              <Checkbox onChange={onChange}>3</Checkbox>
              <Checkbox onChange={onChange}>2</Checkbox>
            </Flex>
            <div>
              Ценовой диапазон
              
            </div>
          </Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
      </Layout>
    </Flex>
  );
};
