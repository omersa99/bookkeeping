import { Entity } from "../entity/Entity";
import { InvoiceModel } from "../invoiceModel/InvoiceModel";
import { Item } from "../item/Item";

export type ItemTransaction = {
  createdAt: Date;
  entity?: Entity | null;
  id: string;
  invoiceModel?: InvoiceModel | null;
  item?: Item | null;
  quantity: number | null;
  totalAmount: string | null;
  unitCost: string | null;
  updatedAt: Date;
};
