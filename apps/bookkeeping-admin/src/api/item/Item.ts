import { Entity } from "../entity/Entity";

export type Item = {
  additionalInfo: string | null;
  Amount: string | null;
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
