import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type PaymentUpdateInput = {
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
