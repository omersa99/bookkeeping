import { SortOrder } from "../../util/SortOrder";

export type ItemTransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  quantity?: SortOrder;
  totalCost?: SortOrder;
  transactionType?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
