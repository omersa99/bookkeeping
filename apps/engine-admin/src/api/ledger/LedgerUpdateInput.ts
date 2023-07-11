import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { JournalUpdateManyWithoutLedgersInput } from "./JournalUpdateManyWithoutLedgersInput";

export type LedgerUpdateInput = {
  entity?: EntityWhereUniqueInput | null;
  invoiceModels?: InvoiceModelWhereUniqueInput | null;
  journals?: JournalUpdateManyWithoutLedgersInput;
  name?: string | null;
};
