import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Flex } from "antd";
import { Header } from "antd/es/layout/layout";
import type { MenuProps } from "antd";
import { headerFlex, headerStyle } from "../pages/HotelsStyle";
import { useNavigate } from "react-router";
import { useStore } from "../store/RootStore";

export const AppHeader = () => {
  const navigate = useNavigate();
  const rootStore = useStore();
  const { logout } = rootStore;

  const onSettings = () => {
    navigate("/account");
  };

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
    if (e.key === "2") {
      logout();
      navigate("/login");
    }
    if (e.key === "1") onSettings();
  };

  const goSearchHotels = () => {
    navigate("/hotels");
  };

  return (
    <div>
      <Header style={headerStyle}>
        <Flex style={headerFlex}>
          <img
            onClick={goSearchHotels}
            src="/logo.svg"
            alt="logo"
            width="40px"
            height="30px"
            style={{ cursor: "pointer" }}
          />

          <Dropdown
            menu={{ items: menuItems, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <UserOutlined style={{ fontSize: "26px" }} />
          </Dropdown>
        </Flex>
      </Header>
    </div>
  );
};
