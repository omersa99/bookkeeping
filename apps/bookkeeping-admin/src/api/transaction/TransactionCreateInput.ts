import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionCreateInput = {
  journal?: JournalWhereUniqueInput | null;
};
