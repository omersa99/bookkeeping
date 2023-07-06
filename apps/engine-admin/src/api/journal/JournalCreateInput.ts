import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";
import { TransactionCreateNestedManyWithoutJournalsInput } from "./TransactionCreateNestedManyWithoutJournalsInput";

export type JournalCreateInput = {
  ledger?: LedgerWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutJournalsInput;
};
