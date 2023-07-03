import { DocumentCreateNestedManyWithoutItemsInput } from "./DocumentCreateNestedManyWithoutItemsInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ItemCreateInput = {
  additionalInfo?: string | null;
  Amount?: string | null;
  cogsAccount?: string | null;
  document?: DocumentCreateNestedManyWithoutItemsInput;
  earningsAccount?: string | null;
  entity?: EntityWhereUniqueInput | null;
  expenseAccount?: string | null;
  inventoryAccount?: string | null;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  itemType?: string | null;
  name?: string | null;
  price?: number | null;
};
