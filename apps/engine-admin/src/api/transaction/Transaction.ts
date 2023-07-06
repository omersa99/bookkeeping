import { Account } from "../account/Account";
import { Journal } from "../journal/Journal";

export type Transaction = {
  account?: Account | null;
  amount: string | null;
  createdAt: Date;
  id: string;
  journal?: Journal | null;
  updatedAt: Date;
};
