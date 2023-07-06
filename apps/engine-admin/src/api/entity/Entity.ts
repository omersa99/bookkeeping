import { Account } from "../account/Account";
import { Ledger } from "../ledger/Ledger";
import { User } from "../user/User";

export type Entity = {
  accounts?: Array<Account>;
  createdAt: Date;
  id: string;
  ledgers?: Array<Ledger>;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
