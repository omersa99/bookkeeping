import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { JournalCreateNestedManyWithoutLedgersInput } from "./JournalCreateNestedManyWithoutLedgersInput";

export type LedgerCreateInput = {
  entity?: EntityWhereUniqueInput | null;
  journals?: JournalCreateNestedManyWithoutLedgersInput;
  name?: string | null;
};
