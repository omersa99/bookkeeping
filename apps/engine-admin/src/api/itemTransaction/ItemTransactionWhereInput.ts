import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ItemTransactionWhereInput = {
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  invoiceModel?: InvoiceModelWhereUniqueInput;
  item?: ItemWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalAmount?: StringNullableFilter;
  unitCost?: StringNullableFilter;
};
