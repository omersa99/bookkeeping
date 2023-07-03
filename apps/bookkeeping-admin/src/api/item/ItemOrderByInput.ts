import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  active?: SortOrder;
  additionalInfo?: SortOrder;
  Amount?: SortOrder;
  cogsAccount?: SortOrder;
  createdAt?: SortOrder;
  earningsAccount?: SortOrder;
  entityId?: SortOrder;
  expenseAccount?: SortOrder;
  id?: SortOrder;
  inventoryAccount?: SortOrder;
  itemRole?: SortOrder;
  itemType?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
