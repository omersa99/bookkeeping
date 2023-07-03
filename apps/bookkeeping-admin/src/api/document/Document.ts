import { Client } from "../client/Client";

export type Document = {
  Client?: Client | null;
  createdAt: Date;
  docType?:
    | "PriceOffer"
    | "Order"
    | "DeliveryCertificate"
    | "Invoice"
    | "CreditInvoice"
    | "Receipt"
    | null;
  dueDate: Date | null;
  id: string;
  linkedDocumentIds: string | null;
  linkType?: "Related" | "Cancelling" | null;
  updatedAt: Date;
  vatType?: "Default" | "Exempt" | "Mixed" | null;
};
