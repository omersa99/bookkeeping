import { EntityUpdateManyWithoutAccountsInput } from "./EntityUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balanceType?: string | null;
  code?: string | null;
  entity?: EntityUpdateManyWithoutAccountsInput;
  name?: string | null;
  role?: string | null;
};
