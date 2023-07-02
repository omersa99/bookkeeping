import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";
import { TransactionUpdateManyWithoutJournalsInput } from "./TransactionUpdateManyWithoutJournalsInput";

export type JournalUpdateInput = {
  ledger?: LedgerWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutJournalsInput;
};
