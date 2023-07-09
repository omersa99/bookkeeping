import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";

export type ItemCreateInput = {
  cogsAccount?: string | null;
  description?: string | null;
  earningsAccount?: string | null;
  entity?: EntityWhereUniqueInput | null;
  inventoryAccount?: string | null;
  invoiceModels?: InvoiceModelWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
  pricePerUnit?: number | null;
  quantity?: number | null;
};
