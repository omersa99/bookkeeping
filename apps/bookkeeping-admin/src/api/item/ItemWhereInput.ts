import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  account?: AccountWhereUniqueInput;
  additionalInfo?: StringNullableFilter;
  Amount?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product";
  itemType?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
