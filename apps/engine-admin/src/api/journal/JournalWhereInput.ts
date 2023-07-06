import { StringFilter } from "../../util/StringFilter";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type JournalWhereInput = {
  id?: StringFilter;
  ledger?: LedgerWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
};
