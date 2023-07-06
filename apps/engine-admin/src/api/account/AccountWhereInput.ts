import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChartOfAccountListRelationFilter } from "../chartOfAccount/ChartOfAccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceModelListRelationFilter } from "../invoiceModel/InvoiceModelListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  balanceType?: StringNullableFilter;
  chartOfAccount?: ChartOfAccountListRelationFilter;
  code?: StringNullableFilter;
  id?: StringFilter;
  invoiceModels?: InvoiceModelListRelationFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
