import { Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { siderStyle } from "../pages/HotelsStyle";
import { CostFilter } from "./CostFilter";
import { StarsFilter } from "./StarsFilter";

export const FilterBar = () => {
  return (
    <Sider width="25%" style={siderStyle}>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <StarsFilter />
        <CostFilter />
      </Space>
    </Sider>
  );
};
