import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LedgerListRelationFilter } from "../ledger/LedgerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityWhereInput = {
  accounts?: AccountListRelationFilter;
  id?: StringFilter;
  ledgers?: LedgerListRelationFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
