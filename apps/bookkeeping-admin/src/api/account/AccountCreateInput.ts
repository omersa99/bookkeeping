import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balanceType?: "Debit" | "Credit" | null;
  chartOfAccount?: ChartOfAccountWhereUniqueInput | null;
  code?: string | null;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
