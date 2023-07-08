import { Entity } from "../entity/Entity";

export type Item = {
  cogsAccount: string | null;
  createdAt: Date;
  description: string | null;
  earningsAccount: string | null;
  entity?: Entity | null;
  id: string;
  inventoryAccount: string | null;
  name: string | null;
  price: number | null;
  pricePerUnit: number | null;
  quantity: number | null;
  updatedAt: Date;
};
