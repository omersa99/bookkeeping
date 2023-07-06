import { SortOrder } from "../../util/SortOrder";

export type LedgerOrderByInput = {
  createdAt?: SortOrder;
  entityID?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
