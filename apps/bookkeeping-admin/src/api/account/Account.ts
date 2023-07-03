import { Transaction } from "../transaction/Transaction";

export type Account = {
  balanceType?: "Debit" | "Credit" | null;
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  role: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
