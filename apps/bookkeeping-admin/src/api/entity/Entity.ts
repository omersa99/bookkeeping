import { Customer } from "../customer/Customer";
import { JsonValue } from "type-fest";
import { Item } from "../item/Item";
import { User } from "../user/User";

export type Entity = {
  accrualMethod: boolean | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  info: JsonValue;
  items?: Array<Item>;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
