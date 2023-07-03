import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  active?: BooleanNullableFilter;
  code?: StringNullableFilter;
  DefaultAccountType?: "Debit" | "Credit";
  documents?: DocumentWhereUniqueInput;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
