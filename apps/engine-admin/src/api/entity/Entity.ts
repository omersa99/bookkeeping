import { Account } from "../account/Account";
import { Customer } from "../customer/Customer";
import { InvoiceModel } from "../invoiceModel/InvoiceModel";
import { Item } from "../item/Item";
import { Journal } from "../journal/Journal";
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
  journals?: Array<Journal>;
  name: string | null;
  taxId: string | null;
  updatedAt: Date;
  user?: User | null;
};
