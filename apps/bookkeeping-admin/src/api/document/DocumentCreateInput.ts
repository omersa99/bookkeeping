import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { Client } from "../client/Client";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DocumentCreateInput = {
  cashAccount?: AccountWhereUniqueInput | null;
  Client?: ClientWhereUniqueInput | null;
  docType?: "Invoice" | "Receipt" | "Bill" | null;
  dueDate?: Date | null;
  supplier?: SupplierWhereUniqueInput | null;
};
