import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ClientWhereInput = {
  active?: BooleanNullableFilter;
  customerName?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  info?: JsonFilter;
  name?: StringNullableFilter;
  taxId?: StringNullableFilter;
};
