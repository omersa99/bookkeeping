import { Ledger } from "../ledger/Ledger";
import { Transaction } from "../transaction/Transaction";

export type Journal = {
  createdAt: Date;
  id: string;
  ledger?: Ledger | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
