import { Account } from "../account/Account";
import { Journal } from "../journal/Journal";

export type Transaction = {
  account?: Account | null;
  amount: number | null;
  createdAt: Date;
  id: string;
  journal?: Journal | null;
  transactionType?: "Debit" | "Credit" | null;
  updatedAt: Date;
};
