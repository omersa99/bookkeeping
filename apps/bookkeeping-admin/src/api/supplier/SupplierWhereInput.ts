import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  active?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
