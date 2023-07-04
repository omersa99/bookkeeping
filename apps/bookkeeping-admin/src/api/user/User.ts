import { Entity } from "../entity/Entity";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  entities?: Array<Entity>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
