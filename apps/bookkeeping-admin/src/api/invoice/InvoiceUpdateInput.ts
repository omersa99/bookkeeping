import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type InvoiceUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  info?: InputJsonValue;
  invoiceNumber?: string | null;
};
