import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { Client } from "../client/Client";

export type DocumentUpdateInput = {
  Client?: ClientWhereUniqueInput | null;
  docType?:
    | "PriceOffer"
    | "Order"
    | "DeliveryCertificate"
    | "Invoice"
    | "CreditInvoice"
    | "Receipt"
    | null;
  dueDate?: Date | null;
  linkedDocumentIds?: string | null;
  linkType?: "Related" | "Cancelling" | null;
  vatType?: "Default" | "Exempt" | "Mixed" | null;
};
