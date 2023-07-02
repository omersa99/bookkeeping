import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionUpdateInput = {
  journal?: JournalWhereUniqueInput | null;
};
