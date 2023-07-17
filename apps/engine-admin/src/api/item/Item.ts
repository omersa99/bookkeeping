import { Entity } from "../entity/Entity";
import { InvoiceModel } from "../invoiceModel/InvoiceModel";
import { ItemTransaction } from "../itemTransaction/ItemTransaction";

export type Item = {
  createdAt: Date;
  description: string | null;
  entity?: Entity | null;
  id: string;
  invoiceModels?: InvoiceModel | null;
  itemTransactions?: Array<ItemTransaction>;
  name: string | null;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
