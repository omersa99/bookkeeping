import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { JournalCreateNestedManyWithoutLedgersInput } from "./JournalCreateNestedManyWithoutLedgersInput";

export type LedgerCreateInput = {
  entity?: EntityWhereUniqueInput | null;
  invoiceModels?: InvoiceModelWhereUniqueInput | null;
  journals?: JournalCreateNestedManyWithoutLedgersInput;
  name?: string | null;
};
