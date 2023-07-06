import { Entity } from "../entity/Entity";
import { InvoiceModel } from "../invoiceModel/InvoiceModel";
import { Journal } from "../journal/Journal";

export type Ledger = {
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  invoiceModels?: InvoiceModel | null;
  journals?: Array<Journal>;
  name: string | null;
  updatedAt: Date;
};
