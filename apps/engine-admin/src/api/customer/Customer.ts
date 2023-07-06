import { Entity } from "../entity/Entity";
import { InvoiceModel } from "../invoiceModel/InvoiceModel";

export type Customer = {
  active: boolean | null;
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  invoiceModels?: Array<InvoiceModel>;
  name: string | null;
  salesTaxRate: number | null;
  updatedAt: Date;
};
