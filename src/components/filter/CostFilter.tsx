import { useStore } from "../../store/rootStore";
import { observer } from "mobx-react-lite";
import { Card, Slider } from "antd";

export const CostFilter = observer(() => {
  const rootStore = useStore();
  const { filter, setCostDiapazon } = rootStore;

  const onSliderChange = (diapazon: number[]) => {
    setCostDiapazon(diapazon);
  };

  return (
    <Card
      title="Цена"
      style={{
        borderColor: "#f4d02e",
      }}
    >
      <Slider
        range={{ draggableTrack: true }}
        max={10000}
        min={100}
        value={[filter.costDiapazon[0], filter.costDiapazon[1]]}
        onChange={onSliderChange}
      />
      {`От ${filter.costDiapazon[0]} до ${filter.costDiapazon[1]} рублей`}
    </Card>
  );
});
