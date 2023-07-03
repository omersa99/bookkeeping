import { Entity } from "../entity/Entity";

export type Item = {
  additionalInfo: string | null;
  Amount: string | null;
  cogsAccount: string | null;
  createdAt: Date;
  earningsAccount: string | null;
  entity?: Entity | null;
  expenseAccount: string | null;
  id: string;
  inventoryAccount: string | null;
  isInventory: boolean | null;
  isProductOrService: boolean | null;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  itemType?: "Labor" | "Material" | "LumpSum" | "Equipment" | "Other" | null;
  name: string | null;
  updatedAt: Date;
};
