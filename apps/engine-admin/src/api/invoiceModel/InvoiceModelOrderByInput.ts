import { SortOrder } from "../../util/SortOrder";

export type InvoiceModelOrderByInput = {
  amountDue?: SortOrder;
  amountPaid?: SortOrder;
  cashAccountId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  invoiceNumber?: SortOrder;
  invoiceStatus?: SortOrder;
  itemTransactionsId?: SortOrder;
  ledgerId?: SortOrder;
  updatedAt?: SortOrder;
};
