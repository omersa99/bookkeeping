export type Meta = {
  active: boolean | null;
  bankAccount: string | null;
  category: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  paymentTerms: string | null;
  paymentType?: "WithoutType" | "Cash" | "CreditCard" | null;
  taxId: string | null;
  updatedAt: Date;
};
