import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balance?: number | null;
  balanceType?: string | null;
  code?: string | null;
  entity?: EntityWhereUniqueInput | null;
  name?: string | null;
  role?: "Asset" | "Liability" | "Income" | "Cogs" | "Expenses" | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
