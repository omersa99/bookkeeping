import { SortOrder } from "../../util/SortOrder";

export type InvoiceModelOrderByInput = {
  amountDue?: SortOrder;
  amountPaid?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  invoiceNumber?: SortOrder;
  invoiceStatus?: SortOrder;
  ledgerId?: SortOrder;
  pricePerUnit?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
