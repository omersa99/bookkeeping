import { Transaction } from "../transaction/Transaction";

export type Payment = {
  amountPaid: number | null;
  createdAt: Date;
  id: string;
  invoice?: Transaction | null;
  paymentMethod?:
    | "Cash"
    | "CreditCard"
    | "Check"
    | "BankTransfer"
    | "App"
    | null;
  updatedAt: Date;
};
