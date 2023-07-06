import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";
import { TransactionCreateNestedManyWithoutJournalsInput } from "./TransactionCreateNestedManyWithoutJournalsInput";

export type JournalCreateInput = {
  entity?: EntityWhereUniqueInput | null;
  ledger?: LedgerWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutJournalsInput;
};
