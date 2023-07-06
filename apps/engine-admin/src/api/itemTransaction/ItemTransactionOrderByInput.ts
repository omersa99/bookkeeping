import { SortOrder } from "../../util/SortOrder";

export type ItemTransactionOrderByInput = {
  createdAt?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  invoiceModelId?: SortOrder;
  itemId?: SortOrder;
  quantity?: SortOrder;
  totalAmount?: SortOrder;
  unitCost?: SortOrder;
  updatedAt?: SortOrder;
};
