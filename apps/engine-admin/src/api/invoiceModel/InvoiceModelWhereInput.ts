import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";

export type InvoiceModelWhereInput = {
  amountDue?: StringNullableFilter;
  amountPaid?: StringNullableFilter;
  cashAccount?: AccountWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  info?: StringNullableFilter;
  invoiceNumber?: StringNullableFilter;
  invoiceStatus?: "Draft" | "Paid" | "Canceled";
  item?: ItemWhereUniqueInput;
  ledger?: LedgerWhereUniqueInput;
};