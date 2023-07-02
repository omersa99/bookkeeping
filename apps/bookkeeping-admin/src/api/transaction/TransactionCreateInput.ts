import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionCreateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: string | null;
  transactionType?: "Credit" | "Debit" | null;
};
