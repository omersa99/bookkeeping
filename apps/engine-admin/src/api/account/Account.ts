import { Entity } from "../entity/Entity";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  balance: number | null;
  balanceType: string | null;
  code: string | null;
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  name: string | null;
  role?: "Asset" | "Liability" | "Income" | "Cogs" | "Expenses" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
