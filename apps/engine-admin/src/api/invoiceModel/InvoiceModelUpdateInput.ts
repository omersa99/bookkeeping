import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";

export type InvoiceModelUpdateInput = {
  amountDue?: string | null;
  amountPaid?: string | null;
  cashAccount?: AccountWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  info?: string | null;
  invoiceNumber?: string | null;
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;
  item?: ItemWhereUniqueInput | null;
  ledger?: LedgerWhereUniqueInput | null;
};
