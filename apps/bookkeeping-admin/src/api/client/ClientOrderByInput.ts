import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  customerName?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  name?: SortOrder;
  taxId?: SortOrder;
  updatedAt?: SortOrder;
};
