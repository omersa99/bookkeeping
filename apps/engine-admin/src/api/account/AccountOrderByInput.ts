import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  balance?: SortOrder;
  balanceType?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
