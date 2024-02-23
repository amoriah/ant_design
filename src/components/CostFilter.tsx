import { Card, Slider } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/RootStore";

export const CostFilter = observer(() => {
  const rootStore = useStore();
  const { hotels, filter, setCostDiapazon } = rootStore;
  let filtered: any = [];

  const onSliderChange = (diapazon: number[]) => {
    setCostDiapazon(diapazon);
  };

  // const handleFilter = (numbers: number[]) => {
  //   filtered = hotels.filter(
  //     (hotel) => hotel.cost >= valueSlider[0] && hotel.cost <= valueSlider[1]
  //   );
  //   filtered.map((f: any) => console.log(f.cost));
  // };

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
        // onChangeComplete={handleFilter}
      />
      {`От ${filter.costDiapazon[0]} до ${filter.costDiapazon[1]} рублей`}
    </Card>
  );
});
