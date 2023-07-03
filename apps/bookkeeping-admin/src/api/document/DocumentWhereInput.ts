import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { Client } from "../client/Client";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DocumentWhereInput = {
  cashAccount?: AccountWhereUniqueInput;
  Client?: ClientWhereUniqueInput;
  docType?: "Invoice" | "Receipt" | "Bill";
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  supplier?: SupplierWhereUniqueInput;
};
