import { ChartOfAccount } from "../chartOfAccount/ChartOfAccount";
import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";
import { ItemTransaction } from "../itemTransaction/ItemTransaction";
import { Journal } from "../journal/Journal";
import { Ledger } from "../ledger/Ledger";
import { User } from "../user/User";

export type Entity = {
  coa?: ChartOfAccount | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  items?: Item | null;
  itemTransactions?: Array<ItemTransaction>;
  journals?: Array<Journal>;
  ledgers?: Array<Ledger>;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
