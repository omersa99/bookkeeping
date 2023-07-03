import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "cashAccount";

export const DocumentTitle = (record: TDocument): string => {
  return record.cashAccount || String(record.id);
};
