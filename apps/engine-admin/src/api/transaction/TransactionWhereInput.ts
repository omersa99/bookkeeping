import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: FloatNullableFilter;
  id?: StringFilter;
  journal?: JournalWhereUniqueInput;
  payments?: PaymentWhereUniqueInput;
  transactionType?: "Debit" | "Credit";
};
