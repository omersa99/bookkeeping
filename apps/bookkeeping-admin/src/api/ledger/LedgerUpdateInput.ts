import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { JournalUpdateManyWithoutLedgersInput } from "./JournalUpdateManyWithoutLedgersInput";

export type LedgerUpdateInput = {
  entity?: EntityWhereUniqueInput | null;
  journals?: JournalUpdateManyWithoutLedgersInput;
  name?: string | null;
};
