import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  journalId?: SortOrder;
  updatedAt?: SortOrder;
};
