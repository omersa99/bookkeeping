import { ItemTransaction as TItemTransaction } from "../api/itemTransaction/ItemTransaction";

export const ITEMTRANSACTION_TITLE_FIELD = "id";

export const ItemTransactionTitle = (record: TItemTransaction): string => {
  return record.id || String(record.id);
};
