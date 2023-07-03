import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ItemUpdateInput = {
  additionalInfo?: string | null;
  Amount?: string | null;
  cogsAccount?: string | null;
  earningsAccount?: string | null;
  entity?: EntityWhereUniqueInput | null;
  expenseAccount?: string | null;
  inventoryAccount?: string | null;
  isInventory?: boolean | null;
  isProductOrService?: boolean | null;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  itemType?: "Labor" | "Material" | "LumpSum" | "Equipment" | "Other" | null;
  name?: string | null;
};
