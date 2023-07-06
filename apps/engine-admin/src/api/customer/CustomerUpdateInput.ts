import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InvoiceModelUpdateManyWithoutCustomersInput } from "./InvoiceModelUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  active?: boolean | null;
  entity?: EntityWhereUniqueInput | null;
  invoiceModels?: InvoiceModelUpdateManyWithoutCustomersInput;
  name?: string | null;
  salesTaxRate?: number | null;
};
