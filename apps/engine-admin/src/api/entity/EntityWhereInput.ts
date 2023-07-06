import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LedgerListRelationFilter } from "../ledger/LedgerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityWhereInput = {
  chartOfAccounts?: ChartOfAccountWhereUniqueInput;
  id?: StringFilter;
  ledgers?: LedgerListRelationFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
