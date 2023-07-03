import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  cashAccount?: SortOrder;
  ClientId?: SortOrder;
  createdAt?: SortOrder;
  docType?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  prepaidAccount?: SortOrder;
  status?: SortOrder;
  supplierId?: SortOrder;
  unearnedAccount?: SortOrder;
  updatedAt?: SortOrder;
};
