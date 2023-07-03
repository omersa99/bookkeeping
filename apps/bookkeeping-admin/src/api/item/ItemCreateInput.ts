import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ItemCreateInput = {
  account?: AccountWhereUniqueInput | null;
  additionalInfo?: string | null;
  Amount?: string | null;
  entity?: EntityWhereUniqueInput | null;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  itemType?: string | null;
  name?: string | null;
  price?: number | null;
};
