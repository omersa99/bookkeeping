import { Account } from "../account/Account";
import { Entity } from "../entity/Entity";

export type ChartOfAccount = {
  accountsSet?: Array<Account>;
  createdAt: Date;
  description: string | null;
  entity?: Entity | null;
  id: string;
  updatedAt: Date;
};
