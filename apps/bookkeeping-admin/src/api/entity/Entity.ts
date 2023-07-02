import { Customer } from "../customer/Customer";
import { JsonValue } from "type-fest";
import { Item } from "../item/Item";
import { Ledger } from "../ledger/Ledger";
import { User } from "../user/User";

export type Entity = {
  accrualMethod: boolean | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  info: JsonValue;
  items?: Array<Item>;
  ledgers?: Array<Ledger>;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
