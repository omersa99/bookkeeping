import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: StringNullableFilter;
  id?: StringFilter;
  transactionType?: "Credit" | "Debit";
};
