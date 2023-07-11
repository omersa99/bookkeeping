import { Customer } from "../customer/Customer";
import { Entity } from "../entity/Entity";
import { Item } from "../item/Item";
import { Ledger } from "../ledger/Ledger";

export type InvoiceModel = {
  amountDue: string | null;
  amountPaid: string | null;
  createdAt: Date;
  customer?: Customer | null;
  entity?: Entity | null;
  id: string;
  info: string | null;
  invoiceNumber: string | null;
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;
  item?: Item | null;
  ledger?: Ledger | null;
  updatedAt: Date;
};
