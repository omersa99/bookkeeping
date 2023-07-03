import { Client } from "../client/Client";
import { Item } from "../item/Item";
import { Supplier } from "../supplier/Supplier";

export type Document = {
  cashAccount: string | null;
  Client?: Client | null;
  createdAt: Date;
  docType?: "Invoice" | "Receipt" | "Bill" | null;
  dueDate: Date | null;
  id: string;
  items?: Array<Item>;
  prepaidAccount: string | null;
  status?: "Draft" | "Approved" | "Paid" | "Canceled" | null;
  supplier?: Supplier | null;
  unearnedAccount: string | null;
  updatedAt: Date;
};
