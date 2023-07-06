import { InvoiceModel as TInvoiceModel } from "../api/invoiceModel/InvoiceModel";

export const INVOICEMODEL_TITLE_FIELD = "cashAccount";

export const InvoiceModelTitle = (record: TInvoiceModel): string => {
  return record.cashAccount || String(record.id);
};
