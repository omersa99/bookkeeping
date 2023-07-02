import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: StringNullableFilter;
  id?: StringFilter;
  journal?: JournalWhereUniqueInput;
  transactionType?: "Credit" | "Debit";
};
