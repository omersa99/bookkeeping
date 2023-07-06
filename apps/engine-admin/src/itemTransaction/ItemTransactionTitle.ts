import { ItemTransaction as TItemTransaction } from "../api/itemTransaction/ItemTransaction";

export const ITEMTRANSACTION_TITLE_FIELD = "totalAmount";

export const ItemTransactionTitle = (record: TItemTransaction): string => {
  return record.totalAmount || String(record.id);
};
