import { Card, Slider } from "antd";
import { useState } from "react";

export const CostFilter = () => {
  const [valueSlider, setValueSlider] = useState([800, 1500]);
  const onSliderChange = (diapazon: number[]) => {
    // console.log("valueSlider", diapazon);
    setValueSlider(diapazon);
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
      />
      {`От ${valueSlider[0]} до ${valueSlider[1]} рублей`}
    </Card>
  );
};
