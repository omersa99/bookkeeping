import { Account } from "../account/Account";
import { Customer } from "../customer/Customer";
import { Ledger } from "../ledger/Ledger";

export type InvoiceModel = {
  amountDue: string | null;
  amountPaid: string | null;
  cashAccount?: Account | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  info: string | null;
  invoiceNumber: string | null;
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;
  ledger?: Ledger | null;
  status?: "Draft" | "Paid" | null;
  updatedAt: Date;
};
