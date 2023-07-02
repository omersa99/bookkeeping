import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ItemWhereInput = {
  Amount?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  isProductOrService?: BooleanNullableFilter;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product";
  itemType?: "Labor" | "Material" | "LumpSum" | "Equipment" | "Other";
  name?: StringNullableFilter;
};
