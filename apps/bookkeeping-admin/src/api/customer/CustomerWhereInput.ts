import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type CustomerWhereInput = {
  customerName?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  info?: JsonFilter;
  invoices?: InvoiceListRelationFilter;
};
