import { StarFilled } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

export function starsFill(count: number) {
  let arr: React.ReactNode[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(<StarFilled style={{ color: "#dbd533" }} key={uuidv4()} />);
  }
  return arr;
}

export function isNumeric(str: string) {
  return /^\d+$/.test(str);
}