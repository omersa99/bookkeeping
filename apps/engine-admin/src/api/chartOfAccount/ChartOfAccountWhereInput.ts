import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ChartOfAccountWhereInput = {
  accounts?: AccountListRelationFilter;
  entitie?: EntityWhereUniqueInput;
  id?: StringFilter;
};
