import { Client } from "../client/Client";
import { JsonValue } from "type-fest";
import { Item } from "../item/Item";

export type Entity = {
  accrualMethod: boolean | null;
  createdAt: Date;
  customers?: Array<Client>;
  deductionRate: string | null;
  id: string;
  info: JsonValue;
  irsId: string | null;
  items?: Array<Item>;
  name: string | null;
  updatedAt: Date;
};
