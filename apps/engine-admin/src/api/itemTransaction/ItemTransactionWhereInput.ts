import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemTransactionWhereInput = {
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalCost?: StringNullableFilter;
  transactionType?: "Purchase" | "Return" | "Adjustment";
  unitPrice?: FloatNullableFilter;
};
