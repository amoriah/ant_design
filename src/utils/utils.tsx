import { StarFilled } from "@ant-design/icons";

export function starsFill(count: number) {
    let arr: React.ReactNode[] = [];
    for (let i = 0; i < count; i++) {
      arr.push(<StarFilled style={{ color: "#dbd533" }} />);
    }
    return arr;
  }