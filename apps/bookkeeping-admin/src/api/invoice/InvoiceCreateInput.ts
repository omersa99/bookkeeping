import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type InvoiceCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  info?: InputJsonValue;
  invoiceNumber?: string | null;
};
