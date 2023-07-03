import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  additionalInfo?: StringNullableFilter;
  Amount?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product";
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
