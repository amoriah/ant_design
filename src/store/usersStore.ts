import { Instance, types } from "mobx-state-tree";

export const UserModel = types.model("UserModel", {
  userId: types.identifier,
  login: types.string,
  password: types.string,
  name: types.optional(types.string, ""),
  age: types.optional(types.string, ""),
  phone: types.optional(types.string, ""),
  reservations: types.array(types.string),
});

export type UserModelType = Instance<typeof UserModel>;
