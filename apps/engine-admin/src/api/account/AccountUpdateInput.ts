import { ChartOfAccountUpdateManyWithoutAccountsInput } from "./ChartOfAccountUpdateManyWithoutAccountsInput";
import { InvoiceModelUpdateManyWithoutAccountsInput } from "./InvoiceModelUpdateManyWithoutAccountsInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balance?: number | null;
  balanceType?: string | null;
  chartOfAccount?: ChartOfAccountUpdateManyWithoutAccountsInput;
  code?: string | null;
  invoiceModels?: InvoiceModelUpdateManyWithoutAccountsInput;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
