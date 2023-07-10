import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type PaymentWhereInput = {
  amountPaid?: IntNullableFilter;
  id?: StringFilter;
  invoice?: TransactionWhereUniqueInput;
  paymentMethod?: "Cash" | "CreditCard" | "Check" | "BankTransfer" | "App";
};
