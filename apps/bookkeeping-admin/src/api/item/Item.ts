import { Document } from "../document/Document";
import { Entity } from "../entity/Entity";

export type Item = {
  additionalInfo: string | null;
  Amount: string | null;
  cogsAccount: string | null;
  createdAt: Date;
  document?: Array<Document>;
  earningsAccount: string | null;
  entity?: Entity | null;
  expenseAccount: string | null;
  id: string;
  inventoryAccount: string | null;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  itemType: string | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
