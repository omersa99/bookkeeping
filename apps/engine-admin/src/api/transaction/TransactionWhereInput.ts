import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: StringNullableFilter;
  id?: StringFilter;
  journal?: JournalWhereUniqueInput;
};
