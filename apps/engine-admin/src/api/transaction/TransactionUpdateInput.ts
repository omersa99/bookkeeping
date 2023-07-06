import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: string | null;
  journal?: JournalWhereUniqueInput | null;
};
