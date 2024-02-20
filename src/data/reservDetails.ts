import { DescriptionsProps } from "antd";

export const reservationItems: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Дата заезда",
    children: '000000',
  },
  {
    key: "2",
    label: "Дата выезда",
    children: '000000',
  },
  {
    key: "3",
    label: "Бронь на имя",
    children: 'Вася Пупкин',
  },
  {
    key: "4",
    label: "Количество гостей",
    children: 1,
  },
  {
    key: "5",
    label: "Количество дней",
    children: 14,
  },
  {
    key: "5",
    label: "Цена",
    children: `${12000} рублей`,
  },
];
