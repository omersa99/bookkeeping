import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ItemUpdateInput = {
  entity?: EntityWhereUniqueInput | null;
  itemRole?: "Expense" | "Inventory" | "Service" | "Product" | null;
  name?: string | null;
};
