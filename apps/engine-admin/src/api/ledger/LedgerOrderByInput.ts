import { SortOrder } from "../../util/SortOrder";

export type LedgerOrderByInput = {
  createdAt?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  invoiceModelsId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
