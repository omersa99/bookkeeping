import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { JournalListRelationFilter } from "../journal/JournalListRelationFilter";
import { LedgerListRelationFilter } from "../ledger/LedgerListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityWhereInput = {
  accountingType?: "Cash" | "Cumulative";
  address?: StringNullableFilter;
  coa?: ChartOfAccountWhereUniqueInput;
  customers?: CustomerListRelationFilter;
  deductionId?: StringNullableFilter;
  deductionRate?: StringNullableFilter;
  exemption?: BooleanNullableFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  journals?: JournalListRelationFilter;
  ledgers?: LedgerListRelationFilter;
  name?: StringNullableFilter;
  taxId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
