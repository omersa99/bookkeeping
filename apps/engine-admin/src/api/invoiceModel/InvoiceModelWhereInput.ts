import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InvoiceModelWhereInput = {
  amountDue?: StringNullableFilter;
  amountPaid?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  info?: StringNullableFilter;
  invoiceNumber?: StringNullableFilter;
  invoiceStatus?: "Draft" | "Paid" | "Canceled";
  item?: ItemWhereUniqueInput;
  ledger?: LedgerWhereUniqueInput;
  pricePerUnit?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
