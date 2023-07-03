import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { Client } from "../client/Client";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DocumentWhereInput = {
  cashAccount?: StringNullableFilter;
  Client?: ClientWhereUniqueInput;
  docType?: "Invoice" | "Receipt" | "Bill";
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  prepaidAccount?: StringNullableFilter;
  status?: "Draft" | "Approved" | "Paid" | "Canceled";
  supplier?: SupplierWhereUniqueInput;
  unearnedAccount?: StringNullableFilter;
};
