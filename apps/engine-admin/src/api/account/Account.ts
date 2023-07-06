import { ChartOfAccount } from "../chartOfAccount/ChartOfAccount";

export type Account = {
  balanceType: string | null;
  chartOfAccount?: Array<ChartOfAccount>;
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  role: string | null;
  updatedAt: Date;
};
