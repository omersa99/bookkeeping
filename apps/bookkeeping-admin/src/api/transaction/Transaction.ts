import { Account } from "../account/Account";

export type Transaction = {
  account?: Account | null;
  amount: string | null;
  createdAt: Date;
  id: string;
  transactionType?: "Credit" | "Debit" | null;
  updatedAt: Date;
};
