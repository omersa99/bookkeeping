import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  accountID?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  journalID?: SortOrder;
  updatedAt?: SortOrder;
};
