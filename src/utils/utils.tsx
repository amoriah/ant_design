import { StarFilled } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { Status } from '../store/reservationStore';

export function getRandomStatus() {
  const states = [Status.Success, Status.Error, Status.Success, Status.Success];
  const inx = Math.floor(Math.random() * states.length);
  return states[inx];
}

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