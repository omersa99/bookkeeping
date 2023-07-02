import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balanceType?: "Debit" | "Credit" | null;
  chartOfAccount?: ChartOfAccountWhereUniqueInput | null;
  code?: string | null;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
