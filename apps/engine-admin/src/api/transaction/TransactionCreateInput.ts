import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionCreateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: string | null;
  journal?: JournalWhereUniqueInput | null;
  trxType?: string | null;
};
