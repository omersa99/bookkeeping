import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LedgerWhereUniqueInput } from "../ledger/LedgerWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type JournalWhereInput = {
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  ledger?: LedgerWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
};
