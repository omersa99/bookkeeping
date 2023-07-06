import { ItemTransactionWhereUniqueInput } from "../itemTransaction/ItemTransactionWhereUniqueInput";

export type InvoiceModelUpdateInput = {
  cashAccount?: string | null;
  customer?: string | null;
  info?: string | null;
  invoiceNumber?: string | null;
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;
  itemTransactions?: ItemTransactionWhereUniqueInput | null;
};
