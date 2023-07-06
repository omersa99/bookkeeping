import { EntityCreateNestedManyWithoutAccountsInput } from "./EntityCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balanceType?: string | null;
  code?: string | null;
  entity?: EntityCreateNestedManyWithoutAccountsInput;
  name?: string | null;
  role?: string | null;
};
