import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  additionalInfo?: SortOrder;
  Amount?: SortOrder;
  cogsAccount?: SortOrder;
  createdAt?: SortOrder;
  earningsAccount?: SortOrder;
  entityId?: SortOrder;
  expenseAccount?: SortOrder;
  id?: SortOrder;
  inventoryAccount?: SortOrder;
  isInventory?: SortOrder;
  isProductOrService?: SortOrder;
  itemRole?: SortOrder;
  itemType?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
