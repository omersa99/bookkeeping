import { ChartOfAccount } from "../chartOfAccount/ChartOfAccount";
import { Ledger } from "../ledger/Ledger";
import { User } from "../user/User";

export type Entity = {
  chartOfAccounts?: ChartOfAccount | null;
  createdAt: Date;
  id: string;
  ledgers?: Array<Ledger>;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
