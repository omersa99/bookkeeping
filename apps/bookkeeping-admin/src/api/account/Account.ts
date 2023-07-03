import { Document } from "../document/Document";
import { Item } from "../item/Item";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  active: boolean | null;
  code: string | null;
  createdAt: Date;
  DefaultAccountType?: "Debit" | "Credit" | null;
  documents?: Document | null;
  id: string;
  items?: Array<Item>;
  name: string | null;
  role: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
