import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { JournalUpdateManyWithoutLedgersInput } from "./JournalUpdateManyWithoutLedgersInput";

export type LedgerUpdateInput = {
  invoiceModels?: InvoiceModelWhereUniqueInput | null;
  journals?: JournalUpdateManyWithoutLedgersInput;
  name?: string | null;
};
