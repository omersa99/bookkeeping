import { Entity } from "../entity/Entity";
import { Journal } from "../journal/Journal";

export type Ledger = {
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  journals?: Array<Journal>;
  name: string | null;
  updatedAt: Date;
};
