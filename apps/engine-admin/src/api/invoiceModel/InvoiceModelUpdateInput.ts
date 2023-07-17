import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";

export type InvoiceModelUpdateInput = {
  amountDue?: string | null;
  amountPaid?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  entity?: EntityWhereUniqueInput | null;
  info?: string | null;
  invoiceNumber?: string | null;
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;
  item?: ItemWhereUniqueInput | null;
  ledger?: LedgerWhereUniqueInput | null;
  pricePerUnit?: number | null;
  quantity?: number | null;
};
