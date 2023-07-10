import { ItemTransaction as TItemTransaction } from "../api/itemTransaction/ItemTransaction";

export const ITEMTRANSACTION_TITLE_FIELD = "totalCost";

export const ItemTransactionTitle = (record: TItemTransaction): string => {
  return record.totalCost || String(record.id);
};
