import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Flex } from "antd";
import { Header } from "antd/es/layout/layout";
import type { MenuProps } from "antd";
import { headerFlex, headerStyle } from "../pages/HotelsStyle";
import { useNavigate } from "react-router";

export const AppHeader = () => {
  const navigate = useNavigate();
  const menuItems: MenuProps["items"] = [
    {
      label: "Настройки",
      key: "1",
    },
    {
      label: "Выйти",
      key: "2",
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    // message.info("Click on menu item.");
    // console.log("click", e);
    if (e.key === "2") console.log("logout");
    if (e.key === "1") console.log("settings");
  };

  const goSearchHotels = () => {
    navigate('/hotels');
  }

  return (
    <div>
      <Header style={headerStyle}>
        <Flex style={headerFlex}>
          <div style={{ fontSize: "24px", cursor: 'pointer' }} onClick={goSearchHotels}>Поиск отелей</div>
          <Dropdown
            menu={{ items: menuItems, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <UserOutlined style={{ fontSize: "24px" }} />
          </Dropdown>
        </Flex>
      </Header>
    </div>
  );
};
