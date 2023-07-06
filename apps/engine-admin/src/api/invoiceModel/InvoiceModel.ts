import { Account } from "../account/Account";
import { Customer } from "../customer/Customer";
import { ItemTransaction } from "../itemTransaction/ItemTransaction";
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
  itemTransactions?: ItemTransaction | null;
  ledger?: Ledger | null;
  updatedAt: Date;
};
