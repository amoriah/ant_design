import { siderStyle } from "../../style/HotelsStyle";
import components from "..";
import { Space } from "antd";
import { Content } from "antd/es/layout/layout";

export const FilterBar = () => {
  return (
    <Content style={siderStyle} className="filter-bar">
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <components.StarsFilter />
        <components.CostFilter />
      </Space>
    </Content>
  );
};
