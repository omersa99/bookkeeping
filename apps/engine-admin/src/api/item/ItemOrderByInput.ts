import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  cogsAccount?: SortOrder;
  createdAt?: SortOrder;
  earningsAccount?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  inventoryAccount?: SortOrder;
  name?: SortOrder;
  pricePerUnit?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
