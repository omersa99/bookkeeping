import { Entity } from "../entity/Entity";

export type Ledger = {
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
