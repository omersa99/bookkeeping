import { AccountUpdateManyWithoutEntitiesInput } from "./AccountUpdateManyWithoutEntitiesInput";
import { LedgerUpdateManyWithoutEntitiesInput } from "./LedgerUpdateManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityUpdateInput = {
  accounts?: AccountUpdateManyWithoutEntitiesInput;
  ledgers?: LedgerUpdateManyWithoutEntitiesInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
