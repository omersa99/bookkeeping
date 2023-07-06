import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ItemTransactionListRelationFilter } from "../itemTransaction/ItemTransactionListRelationFilter";
import { LedgerListRelationFilter } from "../ledger/LedgerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityWhereInput = {
  coa?: ChartOfAccountWhereUniqueInput;
  id?: StringFilter;
  items?: ItemWhereUniqueInput;
  itemTransactions?: ItemTransactionListRelationFilter;
  ledgers?: LedgerListRelationFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
