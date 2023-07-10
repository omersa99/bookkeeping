import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  invoiceModelsId?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  pricePerUnit?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
