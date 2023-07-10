import { Account } from "../account/Account";
import { Journal } from "../journal/Journal";
import { Payment } from "../payment/Payment";

export type Transaction = {
  account?: Account | null;
  amount: number | null;
  createdAt: Date;
  id: string;
  journal?: Journal | null;
  payments?: Payment | null;
  transactionType?: "Debit" | "Credit" | null;
  updatedAt: Date;
};
