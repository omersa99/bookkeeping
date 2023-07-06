import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balanceType?: string | null;
  code?: string | null;
  entity?: EntityWhereUniqueInput | null;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
