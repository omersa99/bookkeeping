import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";
import { TransactionUpdateManyWithoutJournalsInput } from "./TransactionUpdateManyWithoutJournalsInput";

export type JournalUpdateInput = {
  entity?: EntityWhereUniqueInput | null;
  ledger?: LedgerWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutJournalsInput;
};
