export type Account = {
  balanceType?: "Debit" | "Credit" | null;
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  role: string | null;
  updatedAt: Date;
};
