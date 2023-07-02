import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  customerName?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  updatedAt?: SortOrder;
};
