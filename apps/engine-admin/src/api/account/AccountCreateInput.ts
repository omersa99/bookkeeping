import { ChartOfAccountCreateNestedManyWithoutAccountsInput } from "./ChartOfAccountCreateNestedManyWithoutAccountsInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balance?: number | null;
  balanceType?: string | null;
  chartOfAccount?: ChartOfAccountCreateNestedManyWithoutAccountsInput;
  code?: string | null;
  name?: string | null;
  role?: "Asset" | "Liability" | "Income" | "Cogs" | "Expenses" | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
