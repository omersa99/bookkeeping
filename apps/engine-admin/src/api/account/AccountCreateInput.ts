import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balance?: number | null;
  balanceType?: string | null;
  code?: string | null;
  entity?: EntityWhereUniqueInput | null;
  name?: string | null;
  role?: "Asset" | "Liability" | "Income" | "Cogs" | "Expenses" | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
