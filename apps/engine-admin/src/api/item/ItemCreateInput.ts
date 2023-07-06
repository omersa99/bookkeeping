import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { ItemTransactionCreateNestedManyWithoutItemsInput } from "./ItemTransactionCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  cogsAccount?: string | null;
  earningsAccount?: string | null;
  entity?: EntityWhereUniqueInput | null;
  inventoryAccount?: string | null;
  itemTransactions?: ItemTransactionCreateNestedManyWithoutItemsInput;
  name?: string | null;
};
