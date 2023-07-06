import { Journal } from "../journal/Journal";

export type Transaction = {
  amount: string | null;
  createdAt: Date;
  id: string;
  journal?: Journal | null;
  updatedAt: Date;
};
