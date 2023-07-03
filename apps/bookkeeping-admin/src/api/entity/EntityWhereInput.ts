import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type EntityWhereInput = {
  accrualMethod?: BooleanNullableFilter;
  customers?: ClientListRelationFilter;
  id?: StringFilter;
  info?: JsonFilter;
  items?: ItemListRelationFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
