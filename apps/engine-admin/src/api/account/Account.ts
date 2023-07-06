import { Entity } from "../entity/Entity";

export type Account = {
  balanceType: string | null;
  code: string | null;
  createdAt: Date;
  entity?: Array<Entity>;
  id: string;
  name: string | null;
  role: string | null;
  updatedAt: Date;
};
