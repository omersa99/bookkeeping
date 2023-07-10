import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { ItemTransactionUpdateManyWithoutItemsInput } from "./ItemTransactionUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  description?: string | null;
  entity?: EntityWhereUniqueInput | null;
  invoiceModels?: InvoiceModelWhereUniqueInput | null;
  itemTransactions?: ItemTransactionUpdateManyWithoutItemsInput;
  name?: string | null;
  price?: number | null;
  pricePerUnit?: number | null;
  quantity?: number | null;
};
