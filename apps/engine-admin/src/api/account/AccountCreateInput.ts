import { EntityCreateNestedManyWithoutAccountsInput } from "./EntityCreateNestedManyWithoutAccountsInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balanceType?: string | null;
  code?: string | null;
  entity?: EntityCreateNestedManyWithoutAccountsInput;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
