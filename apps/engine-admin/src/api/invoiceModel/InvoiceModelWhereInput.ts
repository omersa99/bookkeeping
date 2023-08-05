import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InvoiceModelWhereInput = {
  amountDue?: FloatNullableFilter;
  amountPaid?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  info?: StringNullableFilter;
  invoiceNumber?: StringNullableFilter;
  invoiceStatus?: "Draft" | "Paid" | "Canceled";
  item?: ItemListRelationFilter;
  ledger?: LedgerWhereUniqueInput;
  pricePerUnit?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
