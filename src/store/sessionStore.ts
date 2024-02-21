import { Instance, types } from "mobx-state-tree";
import { UserModel } from "./usersStore";

export const SessionModel = types.model("SessionModel", {
  isAuth: types.boolean,
  session: types.maybeNull(UserModel),
});

export type SessionModelType = Instance<typeof SessionModel>;
