import { ChartOfAccountCreateNestedManyWithoutAccountsInput } from "./ChartOfAccountCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balanceType?: string | null;
  chartOfAccount?: ChartOfAccountCreateNestedManyWithoutAccountsInput;
  code?: string | null;
  name?: string | null;
  role?: string | null;
};
