import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amountPaid?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  invoice?: SortOrder;
  paymentMethod?: SortOrder;
  updatedAt?: SortOrder;
};
