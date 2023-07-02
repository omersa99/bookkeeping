import { Ledger as TLedger } from "../api/ledger/Ledger";

export const LEDGER_TITLE_FIELD = "name";

export const LedgerTitle = (record: TLedger): string => {
  return record.name || String(record.id);
};
