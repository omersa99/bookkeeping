import { Entity } from "../entity/Entity";
import { JsonValue } from "type-fest";
import { Invoice } from "../invoice/Invoice";

export type Customer = {
  createdAt: Date;
  customerName: string | null;
  entity?: Entity | null;
  id: string;
  info: JsonValue;
  invoices?: Array<Invoice>;
  updatedAt: Date;
};
