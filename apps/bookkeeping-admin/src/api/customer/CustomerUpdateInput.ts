import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  customerName?: string | null;
  entity?: EntityWhereUniqueInput | null;
  info?: InputJsonValue;
  invoices?: InvoiceUpdateManyWithoutCustomersInput;
};
