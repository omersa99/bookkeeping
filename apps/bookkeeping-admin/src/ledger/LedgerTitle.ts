import { Ledger as TLedger } from "../api/ledger/Ledger";

export const LEDGER_TITLE_FIELD = "id";

export const LedgerTitle = (record: TLedger): string => {
  return record.id || String(record.id);
};
