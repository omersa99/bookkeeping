import { Transaction } from "../transaction/Transaction";

export type Account = {
  active: boolean | null;
  code: string | null;
  createdAt: Date;
  DefaultAccountType?: "Debit" | "Credit" | null;
  id: string;
  name: string | null;
  role: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
