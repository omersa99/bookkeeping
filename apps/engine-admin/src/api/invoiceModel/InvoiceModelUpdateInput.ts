import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { ItemUpdateManyWithoutInvoiceModelsInput } from "./ItemUpdateManyWithoutInvoiceModelsInput";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";

export type InvoiceModelUpdateInput = {
  amountDue?: number | null;
  amountPaid?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  entity?: EntityWhereUniqueInput | null;
  info?: string | null;
  invoiceNumber?: string | null;
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;
  item?: ItemUpdateManyWithoutInvoiceModelsInput;
  ledger?: LedgerWhereUniqueInput | null;
  pricePerUnit?: number | null;
  quantity?: number | null;
};
