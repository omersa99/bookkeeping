import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type EntityWhereInput = {
  accrualMethod?: BooleanNullableFilter;
  customers?: ClientListRelationFilter;
  deductionRate?: StringNullableFilter;
  id?: StringFilter;
  info?: JsonFilter;
  irsId?: StringNullableFilter;
  items?: ItemListRelationFilter;
  name?: StringNullableFilter;
};
