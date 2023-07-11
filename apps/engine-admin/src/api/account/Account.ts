import { ChartOfAccount } from "../chartOfAccount/ChartOfAccount";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  balance: number | null;
  balanceType: string | null;
  chartOfAccount?: Array<ChartOfAccount>;
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  role?: "Asset" | "Liability" | "Income" | "Cogs" | "Expenses" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
