import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ChartOfAccountWhereInput = {
  accountsSet?: AccountListRelationFilter;
  description?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
};
