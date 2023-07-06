import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type ItemTransactionUpdateInput = {
  entity?: EntityWhereUniqueInput | null;
  invoiceModel?: InvoiceModelWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  quantity?: number | null;
  totalAmount?: string | null;
  unitCost?: string | null;
};
