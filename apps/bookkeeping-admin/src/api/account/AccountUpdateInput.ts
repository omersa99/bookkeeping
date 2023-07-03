import { ItemUpdateManyWithoutAccountsInput } from "./ItemUpdateManyWithoutAccountsInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  active?: boolean | null;
  code?: string | null;
  DefaultAccountType?: "Debit" | "Credit" | null;
  items?: ItemUpdateManyWithoutAccountsInput;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
