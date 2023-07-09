import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  cogsAccount?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  earningsAccount?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  inventoryAccount?: SortOrder;
  invoiceModelsId?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  pricePerUnit?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
