import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: FloatNullableFilter;
  id?: StringFilter;
  journal?: JournalWhereUniqueInput;
  transactionType?: "Debit" | "Credit";
};
