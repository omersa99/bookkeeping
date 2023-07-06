import { InvoiceModel as TInvoiceModel } from "../api/invoiceModel/InvoiceModel";

export const INVOICEMODEL_TITLE_FIELD = "amountDue";

export const InvoiceModelTitle = (record: TInvoiceModel): string => {
  return record.amountDue || String(record.id);
};
