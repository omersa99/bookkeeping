import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  active?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
