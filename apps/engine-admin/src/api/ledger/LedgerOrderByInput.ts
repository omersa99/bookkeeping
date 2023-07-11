import { SortOrder } from "../../util/SortOrder";

export type LedgerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceModelsId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
