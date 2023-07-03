import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ItemCreateInput = {
  additionalInfo?: string | null;
  Amount?: string | null;
  entity?: EntityWhereUniqueInput | null;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  name?: string | null;
  price?: number | null;
};
