import { Entity as TEntity } from "../api/entity/Entity";

export const ENTITY_TITLE_FIELD = "id";

export const EntityTitle = (record: TEntity): string => {
  return record.id || String(record.id);
};
