import { Card, Radio, Space } from "antd";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { starsFill } from "../utils/utils";

export const StarsFilter = () => {
  const [value, setValue] = useState(1);
  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const starRender = () => {
    const stars = [1, 2, 3, 4, 5];

    const element = stars.map((count) => (
      <Radio value={count}>{starsFill(count)}</Radio>
    ));
    return element;
  };
  return (
    <Card
      title="Звёзды"
      style={{
        display: "flex",
        flexDirection: "column",
        borderColor: "#f4d02e",
      }}
    >
      <Radio.Group
        onChange={onChangeRadio}
        value={value}
        style={{ textAlign: "left" }}
      >
        <Space
          direction="vertical"
          style={{ textAlign: "left", marginLeft: "-100px" }}
        >
          {starRender()}
        </Space>
      </Radio.Group>
    </Card>
  );
};
