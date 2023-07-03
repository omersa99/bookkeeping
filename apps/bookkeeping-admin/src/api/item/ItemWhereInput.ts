import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ItemWhereInput = {
  additionalInfo?: StringNullableFilter;
  Amount?: StringNullableFilter;
  cogsAccount?: StringNullableFilter;
  earningsAccount?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  expenseAccount?: StringNullableFilter;
  id?: StringFilter;
  inventoryAccount?: StringNullableFilter;
  isInventory?: BooleanNullableFilter;
  isProductOrService?: BooleanNullableFilter;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product";
  itemType?: "Labor" | "Material" | "LumpSum" | "Equipment" | "Other";
  name?: StringNullableFilter;
};
