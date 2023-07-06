import { ItemTransaction } from "../itemTransaction/ItemTransaction";

export type InvoiceModel = {
  cashAccount: string | null;
  createdAt: Date;
  customer: string | null;
  id: string;
  info: string | null;
  invoiceNumber: string | null;
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;
  itemTransactions?: ItemTransaction | null;
  updatedAt: Date;
};
