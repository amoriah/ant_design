import { useStore } from "../../store/rootStore";
import { starsFill } from "../../utils/utils";
import type { RadioChangeEvent } from "antd";
import { Card, Radio, Space } from "antd";
import { v4 as uuidv4 } from "uuid";

export const StarsFilter = () => {
  const rootStore = useStore();
  const { filter, setStarsCount } = rootStore;

  const onChangeRadio = (e: RadioChangeEvent) => {
    setStarsCount(e.target.value);
  };

  const starRender = () => {
    const stars = [1, 2, 3, 4, 5];

    const element = stars.map((count) => (
      <Radio value={count} key={uuidv4()}>
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
