import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemTransactionWhereInput = {
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalCost?: FloatNullableFilter;
  transactionType?: "Purchase" | "Return" | "Adjustment" | "Sold";
  unitPrice?: FloatNullableFilter;
};
