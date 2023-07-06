import { SortOrder } from "../../util/SortOrder";

export type InvoiceModelOrderByInput = {
  cashAccount?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  invoiceNumber?: SortOrder;
  invoiceStatus?: SortOrder;
  itemTransactionsId?: SortOrder;
  updatedAt?: SortOrder;
};
