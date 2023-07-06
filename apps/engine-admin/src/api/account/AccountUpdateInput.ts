import { ChartOfAccountUpdateManyWithoutAccountsInput } from "./ChartOfAccountUpdateManyWithoutAccountsInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balanceType?: string | null;
  chartOfAccount?: ChartOfAccountUpdateManyWithoutAccountsInput;
  code?: string | null;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
