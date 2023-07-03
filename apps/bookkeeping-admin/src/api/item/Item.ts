import { Account } from "../account/Account";
import { Entity } from "../entity/Entity";

export type Item = {
  account?: Account | null;
  additionalInfo: string | null;
  Amount: string | null;
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  itemType: string | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
