import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type ItemTransactionCreateInput = {
  item?: ItemWhereUniqueInput | null;
  quantity?: number | null;
  totalCost?: string | null;
  transactionType?: "Purchase" | "Return" | "Adjustment" | null;
  unitPrice?: number | null;
};
