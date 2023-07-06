import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemTransactionWhereUniqueInput } from "../itemTransaction/ItemTransactionWhereUniqueInput";

export type InvoiceModelWhereInput = {
  cashAccount?: StringNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  info?: StringNullableFilter;
  invoiceNumber?: StringNullableFilter;
  invoiceStatus?: "Draft" | "Paid" | "Canceled";
  itemTransactions?: ItemTransactionWhereUniqueInput;
};
