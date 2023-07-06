import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ItemTransactionListRelationFilter } from "../itemTransaction/ItemTransactionListRelationFilter";
import { JournalListRelationFilter } from "../journal/JournalListRelationFilter";
import { LedgerListRelationFilter } from "../ledger/LedgerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityWhereInput = {
  coa?: ChartOfAccountWhereUniqueInput;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  items?: ItemWhereUniqueInput;
  itemTransactions?: ItemTransactionListRelationFilter;
  journals?: JournalListRelationFilter;
  ledgers?: LedgerListRelationFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
