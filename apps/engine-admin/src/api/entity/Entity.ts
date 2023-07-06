import { ChartOfAccount } from "../chartOfAccount/ChartOfAccount";
import { Item } from "../item/Item";
import { ItemTransaction } from "../itemTransaction/ItemTransaction";
import { Ledger } from "../ledger/Ledger";
import { User } from "../user/User";

export type Entity = {
  coa?: ChartOfAccount | null;
  createdAt: Date;
  id: string;
  items?: Item | null;
  itemTransactions?: Array<ItemTransaction>;
  ledgers?: Array<Ledger>;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
