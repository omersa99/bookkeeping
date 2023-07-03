import { Meta as TMeta } from "../api/meta/Meta";

export const META_TITLE_FIELD = "name";

export const MetaTitle = (record: TMeta): string => {
  return record.name || String(record.id);
};
