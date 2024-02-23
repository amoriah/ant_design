import { siderStyle } from "../../style/HotelsStyle";
import Sider from "antd/es/layout/Sider";
import components from "..";
import { Space } from "antd";

export const FilterBar = () => {
  return (
    <Sider width="25%" style={siderStyle}>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <components.StarsFilter />
        <components.CostFilter />
      </Space>
    </Sider>
  );
};
