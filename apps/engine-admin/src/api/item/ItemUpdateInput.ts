import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { ItemTransactionUpdateManyWithoutItemsInput } from "./ItemTransactionUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  cogsAccount?: string | null;
  earningsAccount?: string | null;
  entity?: EntityWhereUniqueInput | null;
  inventoryAccount?: string | null;
  itemTransactions?: ItemTransactionUpdateManyWithoutItemsInput;
  name?: string | null;
  pricePerUnit?: number | null;
  quantity?: number | null;
};
