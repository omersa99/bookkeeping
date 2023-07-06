import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InvoiceModelCreateNestedManyWithoutCustomersInput } from "./InvoiceModelCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  active?: boolean | null;
  entity?: EntityWhereUniqueInput | null;
  invoiceModels?: InvoiceModelCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  salesTaxRate?: number | null;
};
