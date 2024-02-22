import { Card, Slider } from "antd";
import { useState } from "react";
import { useStore } from "../store/RootStore";

export const CostFilter = () => {
  const rootStore = useStore();
  const { hotels } = rootStore;
  let filtered: any = [];

  const [valueSlider, setValueSlider] = useState([800, 1500]);
  const onSliderChange = (diapazon: number[]) => {
    // console.log("valueSlider", diapazon);
    setValueSlider(diapazon);
  };

  const filterrr = (numbers: number[]) => {
    filtered = hotels.filter(
      (hotel) => hotel.cost >= valueSlider[0] && hotel.cost <= valueSlider[1]
    );
    filtered.map((f: any) => console.log(f.cost));
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
        defaultValue={[800, 1500]}
        max={3000}
        min={300}
        value={valueSlider}
        onChange={onSliderChange}
        onChangeComplete={filterrr}
      />
      {`От ${valueSlider[0]} до ${valueSlider[1]} рублей`}
    </Card>
  );
};
