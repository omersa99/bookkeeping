import { SortOrder } from "../../util/SortOrder";

export type MetaOrderByInput = {
  active?: SortOrder;
  bankAccount?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  paymentTerms?: SortOrder;
  paymentType?: SortOrder;
  taxId?: SortOrder;
  updatedAt?: SortOrder;
};
