import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  accountId?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  journalId?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
