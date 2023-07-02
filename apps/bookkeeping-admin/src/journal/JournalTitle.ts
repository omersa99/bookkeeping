import { Journal as TJournal } from "../api/journal/Journal";

export const JOURNAL_TITLE_FIELD = "id";

export const JournalTitle = (record: TJournal): string => {
  return record.id || String(record.id);
};
