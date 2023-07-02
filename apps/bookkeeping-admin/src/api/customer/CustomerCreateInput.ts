import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  customerName?: string | null;
  entity?: EntityWhereUniqueInput | null;
  info?: InputJsonValue;
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;
};
