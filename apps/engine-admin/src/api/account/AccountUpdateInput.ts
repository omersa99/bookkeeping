import { EntityUpdateManyWithoutAccountsInput } from "./EntityUpdateManyWithoutAccountsInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balanceType?: string | null;
  code?: string | null;
  entity?: EntityUpdateManyWithoutAccountsInput;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
