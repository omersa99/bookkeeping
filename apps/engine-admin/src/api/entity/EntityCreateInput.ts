import { AccountCreateNestedManyWithoutEntitiesInput } from "./AccountCreateNestedManyWithoutEntitiesInput";
import { LedgerCreateNestedManyWithoutEntitiesInput } from "./LedgerCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityCreateInput = {
  accounts?: AccountCreateNestedManyWithoutEntitiesInput;
  ledgers?: LedgerCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
