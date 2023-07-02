import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  itemRole?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
