import { InvoiceModel } from "../invoiceModel/InvoiceModel";
import { Journal } from "../journal/Journal";

export type Ledger = {
  createdAt: Date;
  id: string;
  invoiceModels?: InvoiceModel | null;
  journals?: Array<Journal>;
  name: string | null;
  updatedAt: Date;
};
