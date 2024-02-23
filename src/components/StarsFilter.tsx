import { Card, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { starsFill } from "../utils/utils";
import { useStore } from "../store/RootStore";

export const StarsFilter = () => {
  const rootStore = useStore();
  const { filter, setStarsCount } = rootStore;

  const onChangeRadio = (e: RadioChangeEvent) => {
    setStarsCount(e.target.value);
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
        value={filter.starsCount}
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
