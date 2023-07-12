import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

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
  itemUnits?: IntNullableFilter;
  ledger?: LedgerWhereUniqueInput;
  pricePerUnit?: FloatNullableFilter;
};
