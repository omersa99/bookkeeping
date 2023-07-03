import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  additionalInfo?: StringNullableFilter;
  Amount?: StringNullableFilter;
  cogsAccount?: StringNullableFilter;
  document?: DocumentListRelationFilter;
  earningsAccount?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  expenseAccount?: StringNullableFilter;
  id?: StringFilter;
  inventoryAccount?: StringNullableFilter;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product";
  itemType?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
