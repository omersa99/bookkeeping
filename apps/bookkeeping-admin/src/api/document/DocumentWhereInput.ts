import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { Client } from "../client/Client";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DocumentWhereInput = {
  Client?: ClientWhereUniqueInput;
  docType?:
    | "PriceOffer"
    | "Order"
    | "DeliveryCertificate"
    | "Invoice"
    | "CreditInvoice"
    | "Receipt";
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  linkedDocumentIds?: StringNullableFilter;
  linkType?: "Related" | "Cancelling";
  vatType?: "Default" | "Exempt" | "Mixed";
};
