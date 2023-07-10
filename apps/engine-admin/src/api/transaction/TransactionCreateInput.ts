import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionCreateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  journal?: JournalWhereUniqueInput | null;
  transactionType?: "Debit" | "Credit" | null;
};
