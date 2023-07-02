export type AccountCreateInput = {
  balanceType?: "Debit" | "Credit" | null;
  code?: string | null;
  name?: string | null;
  role?: string | null;
};
