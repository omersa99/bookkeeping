import { ChartOfAccountCreateNestedManyWithoutAccountsInput } from "./ChartOfAccountCreateNestedManyWithoutAccountsInput";
import { InvoiceModelCreateNestedManyWithoutAccountsInput } from "./InvoiceModelCreateNestedManyWithoutAccountsInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balance?: number | null;
  balanceType?: string | null;
  chartOfAccount?: ChartOfAccountCreateNestedManyWithoutAccountsInput;
  code?: string | null;
  invoiceModels?: InvoiceModelCreateNestedManyWithoutAccountsInput;
  name?: string | null;
  role?: "Asset" | "Liability" | "Income" | "Cogs" | "Expenses" | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
