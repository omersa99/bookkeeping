import { Journal } from "../journal/Journal";

export type Transaction = {
  createdAt: Date;
  id: string;
  journal?: Journal | null;
  updatedAt: Date;
};
