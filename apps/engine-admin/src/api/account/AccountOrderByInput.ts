import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  balanceType?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  entityID?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
