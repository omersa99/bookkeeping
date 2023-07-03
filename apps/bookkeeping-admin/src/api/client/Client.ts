import { Document } from "../document/Document";
import { Entity } from "../entity/Entity";
import { JsonValue } from "type-fest";

export type Client = {
  createdAt: Date;
  customerName: string | null;
  documents?: Array<Document>;
  entity?: Entity | null;
  id: string;
  info: JsonValue;
  updatedAt: Date;
};
