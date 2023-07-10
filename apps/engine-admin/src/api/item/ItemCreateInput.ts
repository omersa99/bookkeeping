import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { ItemTransactionCreateNestedManyWithoutItemsInput } from "./ItemTransactionCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  description?: string | null;
  entity?: EntityWhereUniqueInput | null;
  invoiceModels?: InvoiceModelWhereUniqueInput | null;
  itemTransactions?: ItemTransactionCreateNestedManyWithoutItemsInput;
  name?: string | null;
  price?: number | null;
  pricePerUnit?: number | null;
  quantity?: number | null;
};
