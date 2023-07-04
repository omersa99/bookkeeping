import { SortOrder } from "../../util/SortOrder";

export type EntityOrderByInput = {
  accrualMethod?: SortOrder;
  createdAt?: SortOrder;
  deductionRate?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  irsId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
