import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type PaymentCreateInput = {
  amountPaid?: number | null;
  invoice?: TransactionWhereUniqueInput | null;
  paymentMethod?:
    | "Cash"
    | "CreditCard"
    | "Check"
    | "BankTransfer"
    | "App"
    | null;
};
