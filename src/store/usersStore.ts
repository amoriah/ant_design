import { Instance, types } from "mobx-state-tree";

export enum Gender {
  Male = "мужской",
  Female = "женский",
  Default = "не указан",
}

const GenderType = types.enumeration<Gender>("Status", Object.values(Gender));

export const UserModel = types.model("UserModel", {
  userId: types.identifier,
  login: types.string,
  password: types.string,
  name: types.optional(types.string, "defaultName"),
  age: types.optional(types.string, ""),
  gender: types.optional(GenderType, Gender.Default),
  phone: types.optional(types.string, ""),
  reservations: types.optional(types.array(types.number), []),
});

export type UserModelType = Instance<typeof UserModel>;
