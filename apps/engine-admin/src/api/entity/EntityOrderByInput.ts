import { SortOrder } from "../../util/SortOrder";

export type EntityOrderByInput = {
  accountingType?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
  deductionId?: SortOrder;
  deductionRate?: SortOrder;
  exemption?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  taxId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
