import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemTransactionListRelationFilter } from "../itemTransaction/ItemTransactionListRelationFilter";

export type ItemWhereInput = {
  cogsAccount?: StringNullableFilter;
  earningsAccount?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  inventoryAccount?: StringNullableFilter;
  itemTransactions?: ItemTransactionListRelationFilter;
  name?: StringNullableFilter;
};
