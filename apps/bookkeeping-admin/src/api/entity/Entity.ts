import { Client } from "../client/Client";
import { JsonValue } from "type-fest";
import { Item } from "../item/Item";

export type Entity = {
  accrualMethod: boolean | null;
  createdAt: Date;
  customers?: Array<Client>;
  id: string;
  info: JsonValue;
  items?: Array<Item>;
  name: string | null;
  updatedAt: Date;
};
