import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { StarFilled, UserOutlined } from "@ant-design/icons";
import {
  Typography,
  CheckboxProps,
  Checkbox,
  Dropdown,
  Flex,
  Layout,
  message,
  Space,
  Card,
  Radio,
} from "antd";
import type { MenuProps, RadioChangeEvent } from "antd";

const { Title, Text } = Typography;

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
    height: "calc(100vh - 64px)",
    // lineHeight: "100vh",
    color: "#111",
    backgroundColor: "#fff",
  };
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const headerFlex: React.CSSProperties = {
    justifyContent: "space-between",
    alignItems: "center",
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    // message.info("Click on menu item.");
    // console.log("click", e);
    if (e.key === "2") console.log("logout");
    if (e.key === "1") console.log("settings");
  };

  const items: MenuProps["items"] = [
    {
      label: "настройки",
      key: "1",
    },
    {
      label: "выйти",
      key: "2",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const [value, setValue] = useState(1);
  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const stars = [1, 2, 3, 4, 5];

  const getStars = () => {
    return (
      <Space
        direction="vertical"
        style={{ textAlign: "left", marginLeft: "-100px" }}
      >
        {stars.map((count) => {
          const arr: React.ReactNode[] = [];
          for (let i = 0; i < count; i++) {
            arr.push(<StarFilled />);
          }
          return arr;
        })}
      </Space>
    );
  };

  const starRender = getStars();
  console.log('starRender', starRender.props)

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Flex style={headerFlex}>
            <div style={{ fontSize: "24px" }}>Поиск отелей</div>
            <Dropdown menu={menuProps}>
              <UserOutlined style={{ fontSize: "24px" }} />
            </Dropdown>
          </Flex>
        </Header>
        <Layout>
          <Sider width="25%" style={siderStyle}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <Card
                title="Количество звезд"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Radio.Group
                  onChange={onChangeRadio}
                  value={value}
                  style={{ textAlign: "left" }}
                >
                  {starRender}
                  {/* <Space
                    direction="vertical"
                    style={{ textAlign: "left", marginLeft: "-100px" }}
                  >
                    <Radio value={1}>
                      <StarFilled />
                    </Radio>
                    <Radio value={2}>
                      <StarFilled />
                      <StarFilled />
                    </Radio>
                    <Radio value={3}>
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                    </Radio>
                    <Radio value={4}>
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                    </Radio>
                    <Radio value={5}>
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                    </Radio>
                  </Space> */}
                </Radio.Group>
              </Card>
              <Card title="Ценовой диапазон">
                <p>Card content</p>
              </Card>
            </Space>
          </Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
      </Layout>
    </Flex>
  );
};
