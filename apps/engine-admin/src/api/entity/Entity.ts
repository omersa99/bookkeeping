import { ChartOfAccount } from "../chartOfAccount/ChartOfAccount";
import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";
import { Journal } from "../journal/Journal";
import { Ledger } from "../ledger/Ledger";
import { User } from "../user/User";

export type Entity = {
  accountingType?: "Cash" | "Cumulative" | null;
  address: string | null;
  coa?: ChartOfAccount | null;
  createdAt: Date;
  customers?: Array<Customer>;
  deductionId: string | null;
  deductionRate: string | null;
  exemption: boolean | null;
  id: string;
  items?: Item | null;
  journals?: Array<Journal>;
  ledgers?: Array<Ledger>;
  name: string | null;
  taxId: string | null;
  updatedAt: Date;
  user?: User | null;
};
