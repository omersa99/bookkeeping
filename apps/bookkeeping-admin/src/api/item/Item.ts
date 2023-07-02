import { Entity } from "../entity/Entity";

export type Item = {
  Amount: string | null;
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  isProductOrService: boolean | null;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  itemType?: "Labor" | "Material" | "LumpSum" | "Equipment" | "Other" | null;
  name: string | null;
  updatedAt: Date;
};
