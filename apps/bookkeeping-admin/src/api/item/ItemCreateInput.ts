import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ItemCreateInput = {
  Amount?: string | null;
  entity?: EntityWhereUniqueInput | null;
  isProductOrService?: boolean | null;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  itemType?: "Labor" | "Material" | "LumpSum" | "Equipment" | "Other" | null;
  name?: string | null;
};
