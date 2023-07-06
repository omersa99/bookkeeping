import { Account } from "../account/Account";
import { Entity } from "../entity/Entity";

export type ChartOfAccount = {
  accounts?: Array<Account>;
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  updatedAt: Date;
};
