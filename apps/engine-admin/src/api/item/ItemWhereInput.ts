import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ItemWhereInput = {
  cogsAccount?: StringNullableFilter;
  description?: StringNullableFilter;
  earningsAccount?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  inventoryAccount?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  pricePerUnit?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
