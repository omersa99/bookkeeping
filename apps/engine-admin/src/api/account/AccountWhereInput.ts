import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  balanceType?: StringNullableFilter;
  code?: StringNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
