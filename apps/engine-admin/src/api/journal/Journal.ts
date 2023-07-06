import { Entity } from "../entity/Entity";
import { Ledger } from "../ledger/Ledger";
import { Transaction } from "../transaction/Transaction";

export type Journal = {
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  ledger?: Ledger | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
