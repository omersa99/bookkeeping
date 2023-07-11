import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { JournalCreateNestedManyWithoutLedgersInput } from "./JournalCreateNestedManyWithoutLedgersInput";

export type LedgerCreateInput = {
  invoiceModels?: InvoiceModelWhereUniqueInput | null;
  journals?: JournalCreateNestedManyWithoutLedgersInput;
  name?: string | null;
};
