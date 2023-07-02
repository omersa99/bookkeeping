import { Entity } from "../entity/Entity";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  entity?: Entity | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
