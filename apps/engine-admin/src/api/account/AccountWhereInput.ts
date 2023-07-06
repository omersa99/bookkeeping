import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityListRelationFilter } from "../entity/EntityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  balanceType?: StringNullableFilter;
  code?: StringNullableFilter;
  entity?: EntityListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
};
