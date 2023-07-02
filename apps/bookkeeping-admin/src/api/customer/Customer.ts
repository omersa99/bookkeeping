import { Entity } from "../entity/Entity";
import { JsonValue } from "type-fest";

export type Customer = {
  createdAt: Date;
  customerName: string | null;
  entity?: Entity | null;
  id: string;
  info: JsonValue;
  updatedAt: Date;
};
