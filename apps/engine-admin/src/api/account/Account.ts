import { Entity } from "../entity/Entity";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  balanceType: string | null;
  code: string | null;
  createdAt: Date;
  entity?: Array<Entity>;
  id: string;
  name: string | null;
  role: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
