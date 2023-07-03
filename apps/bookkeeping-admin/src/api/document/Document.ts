import { Account } from "../account/Account";
import { Client } from "../client/Client";
import { Supplier } from "../supplier/Supplier";

export type Document = {
  cashAccount?: Account | null;
  Client?: Client | null;
  createdAt: Date;
  docType?: "Invoice" | "Receipt" | "Bill" | null;
  dueDate: Date | null;
  id: string;
  supplier?: Supplier | null;
  updatedAt: Date;
};
