import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { LedgerListRelationFilter } from "../ledger/LedgerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type EntityWhereInput = {
  accrualMethod?: BooleanNullableFilter;
  chartOfAccounts?: ChartOfAccountWhereUniqueInput;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  info?: JsonFilter;
  items?: ItemListRelationFilter;
  ledgers?: LedgerListRelationFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
