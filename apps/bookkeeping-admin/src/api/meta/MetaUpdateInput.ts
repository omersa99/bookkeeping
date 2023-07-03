export type MetaUpdateInput = {
  active?: boolean | null;
  bankAccount?: string | null;
  category?: string | null;
  email?: string | null;
  name?: string | null;
  paymentTerms?: string | null;
  paymentType?: "WithoutType" | "Cash" | "CreditCard" | null;
  taxId?: string | null;
};
