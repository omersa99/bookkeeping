import { Entity } from "../entity/Entity";

export type Item = {
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  name: string | null;
  updatedAt: Date;
};
