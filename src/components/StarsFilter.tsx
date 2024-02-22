import { Card, Radio, Space } from "antd";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { starsFill } from "../utils/utils";
import { useStore } from "../store/RootStore";

export const StarsFilter = () => {
  const [value, setValue] = useState(1);
  const rootStore = useStore();
  const { hotels } = rootStore;
  let filtered: any = [];
  const onChangeRadio = (e: RadioChangeEvent) => {
    // console.log("radio checked", e.target.value);
    setValue(e.target.value);
    filtered = hotels.filter((hotel) => hotel.stars === e.target.value);
    filtered.map((f: any) => console.log(f.hotelName));
//куда сохранять отфильтрованные данные?
  };


  const starRender = () => {
    const stars = [1, 2, 3, 4, 5];

    const element = stars.map((count, i) => (
      <Radio value={count} key={i}>
        {starsFill(count)}
      </Radio>
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
