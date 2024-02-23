import { UserOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import * as style from "../style/HotelsStyle";
import { useStore } from "../store/RootStore";
import { useNavigate } from "react-router";
import { Dropdown, Flex } from "antd";
import type { MenuProps } from "antd";
import { menuItems } from "../data/headerData";

export const AppHeader = () => {
  const navigate = useNavigate();
  const rootStore = useStore();
  const { logout } = rootStore;

  const onSettings = () => {
    navigate("/account");
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1":
        onSettings();
        break;
      case "2":
        logout();
        navigate("/login");
        break;

      default:
        break;
    }
  };

  const goSearchHotels = () => {
    navigate("/hotels");
  };

  return (
    <div>
      <Header style={style.headerStyle}>
        <Flex style={style.headerFlex}>
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
