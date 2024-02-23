import { Instance, types } from "mobx-state-tree";

export const FilterModel = types.model("FilterModel", {
  starsCount: types.number,
  costDiapazon: types.array(types.late(() => types.number)),
});

export type FilterModelType = Instance<typeof FilterModel>;
