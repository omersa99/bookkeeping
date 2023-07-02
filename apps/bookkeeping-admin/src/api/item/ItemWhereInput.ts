import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ItemWhereInput = {
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product";
  name?: StringNullableFilter;
};
