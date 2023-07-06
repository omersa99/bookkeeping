import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  salesTaxRate?: SortOrder;
  updatedAt?: SortOrder;
};
