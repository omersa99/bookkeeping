import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChartOfAccountListRelationFilter } from "../chartOfAccount/ChartOfAccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  balanceType?: StringNullableFilter;
  chartOfAccount?: ChartOfAccountListRelationFilter;
  code?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
