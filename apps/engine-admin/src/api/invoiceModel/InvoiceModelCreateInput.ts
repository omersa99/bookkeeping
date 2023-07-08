import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";

export type InvoiceModelCreateInput = {
  amountDue?: string | null;
  amountPaid?: string | null;
  cashAccount?: AccountWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  info?: string | null;
  invoiceNumber?: string | null;
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;
  ledger?: LedgerWhereUniqueInput | null;
  status?: "Draft" | "Paid" | null;
};
