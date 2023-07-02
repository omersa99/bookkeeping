import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  balanceType?: SortOrder;
  chartOfAccountId?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
