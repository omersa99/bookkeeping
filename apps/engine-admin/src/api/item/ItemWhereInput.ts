import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { ItemTransactionListRelationFilter } from "../itemTransaction/ItemTransactionListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ItemWhereInput = {
  description?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  invoiceModels?: InvoiceModelWhereUniqueInput;
  itemTransactions?: ItemTransactionListRelationFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
