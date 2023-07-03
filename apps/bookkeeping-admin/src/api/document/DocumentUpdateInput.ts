import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { Client } from "../client/Client";
import { ItemUpdateManyWithoutDocumentsInput } from "./ItemUpdateManyWithoutDocumentsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DocumentUpdateInput = {
  cashAccount?: string | null;
  Client?: ClientWhereUniqueInput | null;
  docType?: "Invoice" | "Receipt" | "Bill" | null;
  dueDate?: Date | null;
  items?: ItemUpdateManyWithoutDocumentsInput;
  prepaidAccount?: string | null;
  status?: "Draft" | "Approved" | "Paid" | "Canceled" | null;
  supplier?: SupplierWhereUniqueInput | null;
  unearnedAccount?: string | null;
};
