import { ChartOfAccountUpdateManyWithoutAccountsInput } from "./ChartOfAccountUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balanceType?: string | null;
  chartOfAccount?: ChartOfAccountUpdateManyWithoutAccountsInput;
  code?: string | null;
  name?: string | null;
  role?: string | null;
};
