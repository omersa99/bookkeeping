import { ChartOfAccount } from "../chartOfAccount/ChartOfAccount";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  balanceType: string | null;
  chartOfAccount?: Array<ChartOfAccount>;
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  role: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
