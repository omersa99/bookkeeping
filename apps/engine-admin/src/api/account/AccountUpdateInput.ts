import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balanceType?: string | null;
  code?: string | null;
  entity?: EntityWhereUniqueInput | null;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
