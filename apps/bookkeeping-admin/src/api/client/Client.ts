import { Document } from "../document/Document";
import { Entity } from "../entity/Entity";
import { JsonValue } from "type-fest";

export type Client = {
  active: boolean | null;
  createdAt: Date;
  customerName: string | null;
  documents?: Array<Document>;
  entity?: Entity | null;
  id: string;
  info: JsonValue;
  name: string | null;
  taxId: string | null;
  updatedAt: Date;
};
