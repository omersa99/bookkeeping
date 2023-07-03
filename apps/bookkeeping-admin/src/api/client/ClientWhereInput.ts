import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ClientWhereInput = {
  customerName?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  info?: JsonFilter;
};
