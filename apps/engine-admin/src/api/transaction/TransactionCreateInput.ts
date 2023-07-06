import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: string | null;
  journal?: JournalWhereUniqueInput | null;
};
