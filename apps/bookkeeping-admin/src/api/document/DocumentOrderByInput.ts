import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  ID?: SortOrder;
  ClientId?: SortOrder;
  createdAt?: SortOrder;
  docType?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
