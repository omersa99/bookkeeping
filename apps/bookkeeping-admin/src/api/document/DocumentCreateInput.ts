import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { Client } from "../client/Client";
import { ItemCreateNestedManyWithoutDocumentsInput } from "./ItemCreateNestedManyWithoutDocumentsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DocumentCreateInput = {
  cashAccount?: string | null;
  Client?: ClientWhereUniqueInput | null;
  docType?: "Invoice" | "Receipt" | "Bill" | null;
  dueDate?: Date | null;
  items?: ItemCreateNestedManyWithoutDocumentsInput;
  prepaidAccount?: string | null;
  status?: "Draft" | "Approved" | "Paid" | "Canceled" | null;
  supplier?: SupplierWhereUniqueInput | null;
  unearnedAccount?: string | null;
};
