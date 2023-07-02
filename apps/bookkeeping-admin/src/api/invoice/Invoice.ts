import { Customer } from "../customer/Customer";
import { JsonValue } from "type-fest";

export type Invoice = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  info: JsonValue;
  invoiceNumber: string | null;
  updatedAt: Date;
};
