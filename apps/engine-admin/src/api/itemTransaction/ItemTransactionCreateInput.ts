import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type ItemTransactionCreateInput = {
  item?: ItemWhereUniqueInput | null;
  quantity?: number | null;
  totalCost?: number | null;
  transactionType?: "Purchase" | "Return" | "Adjustment" | "Sold" | null;
  unitPrice?: number | null;
};
