import { InvoiceModel as TInvoiceModel } from "../api/invoiceModel/InvoiceModel";

export const INVOICEMODEL_TITLE_FIELD = "amountPaid";

export const InvoiceModelTitle = (record: TInvoiceModel): string => {
  return record.amountPaid || String(record.id);
};
