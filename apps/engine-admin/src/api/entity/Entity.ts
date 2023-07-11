import { Account } from "../account/Account";
import { Customer } from "../customer/Customer";
import { InvoiceModel } from "../invoiceModel/InvoiceModel";
import { Item } from "../item/Item";
import { Ledger } from "../ledger/Ledger";
import { User } from "../user/User";

export type Entity = {
  accountingType?: "Cash" | "Cumulative" | null;
  accounts?: Array<Account>;
  address: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  deductionId: string | null;
  deductionRate: string | null;
  exemption: boolean | null;
  id: string;
  invoiceModels?: Array<InvoiceModel>;
  items?: Array<Item>;
  ledgers?: Array<Ledger>;
  name: string | null;
  taxId: string | null;
  updatedAt: Date;
  user?: User | null;
};
