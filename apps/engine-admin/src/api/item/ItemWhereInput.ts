import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ItemWhereInput = {
  cogsAccount?: StringNullableFilter;
  description?: StringNullableFilter;
  earningsAccount?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  inventoryAccount?: StringNullableFilter;
  invoiceModels?: InvoiceModelWhereUniqueInput;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  pricePerUnit?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
