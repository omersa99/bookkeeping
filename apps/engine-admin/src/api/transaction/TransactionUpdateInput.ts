import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  journal?: JournalWhereUniqueInput | null;
  payments?: PaymentWhereUniqueInput | null;
  transactionType?: "Debit" | "Credit" | null;
};
