import { Item } from "../item/Item";

export type ItemTransaction = {
  createdAt: Date;
  id: string;
  item?: Item | null;
  quantity: number | null;
  totalCost: string | null;
  transactionType?: "Purchase" | "Return" | "Adjustment" | null;
  unitPrice: number | null;
  updatedAt: Date;
};
