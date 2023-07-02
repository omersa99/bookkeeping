import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InvoiceWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  info?: JsonFilter;
  invoiceNumber?: StringNullableFilter;
};
