import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  active?: BooleanNullableFilter;
  code?: StringNullableFilter;
  DefaultAccountType?: "Debit" | "Credit";
  id?: StringFilter;
  items?: ItemListRelationFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
