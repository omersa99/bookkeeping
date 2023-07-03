import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "customerName";

export const ClientTitle = (record: TClient): string => {
  return record.customerName || String(record.id);
};
