import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  createdAt?: SortOrder;
  customerName?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  updatedAt?: SortOrder;
};
