import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { ItemCreateNestedManyWithoutInvoiceModelsInput } from "./ItemCreateNestedManyWithoutInvoiceModelsInput";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";

export type InvoiceModelCreateInput = {
  amountDue?: number | null;
  amountPaid?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  entity?: EntityWhereUniqueInput | null;
  info?: string | null;
  invoiceNumber?: string | null;
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;
  item?: ItemCreateNestedManyWithoutInvoiceModelsInput;
  ledger?: LedgerWhereUniqueInput | null;
  pricePerUnit?: number | null;
  quantity?: number | null;
};
