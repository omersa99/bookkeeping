import { Entity } from "../entity/Entity";
import { ItemTransaction } from "../itemTransaction/ItemTransaction";

export type Item = {
  cogsAccount: string | null;
  createdAt: Date;
  earningsAccount: string | null;
  entity?: Entity | null;
  id: string;
  inventoryAccount: string | null;
  itemTransactions?: Array<ItemTransaction>;
  name: string | null;
  updatedAt: Date;
};
