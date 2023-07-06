import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: string | null;
  journal?: JournalWhereUniqueInput | null;
};
