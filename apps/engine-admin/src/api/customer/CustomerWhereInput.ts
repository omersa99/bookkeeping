import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceModelListRelationFilter } from "../invoiceModel/InvoiceModelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CustomerWhereInput = {
  active?: BooleanNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  invoiceModels?: InvoiceModelListRelationFilter;
  name?: StringNullableFilter;
  salesTaxRate?: FloatNullableFilter;
};
