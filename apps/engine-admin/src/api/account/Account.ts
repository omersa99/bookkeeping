import { ChartOfAccount } from "../chartOfAccount/ChartOfAccount";
import { InvoiceModel } from "../invoiceModel/InvoiceModel";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  balance: number | null;
  balanceType: string | null;
  chartOfAccount?: Array<ChartOfAccount>;
  code: string | null;
  createdAt: Date;
  id: string;
  invoiceModels?: Array<InvoiceModel>;
  name: string | null;
  role: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
