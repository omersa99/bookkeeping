import { Item } from "../item/Item";

export type ItemTransaction = {
  createdAt: Date;
  id: string;
  item?: Item | null;
  quantity: number | null;
  totalCost: number | null;
  transactionType?: "Purchase" | "Return" | "Adjustment" | "Sold" | null;
  unitPrice: number | null;
  updatedAt: Date;
};
