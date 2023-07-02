import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerUpdateManyWithoutEntitiesInput } from "./CustomerUpdateManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemUpdateManyWithoutEntitiesInput } from "./ItemUpdateManyWithoutEntitiesInput";
import { LedgerUpdateManyWithoutEntitiesInput } from "./LedgerUpdateManyWithoutEntitiesInput";
import { UserUpdateManyWithoutEntitiesInput } from "./UserUpdateManyWithoutEntitiesInput";

export type EntityUpdateInput = {
  accrualMethod?: boolean | null;
  chartOfAccounts?: ChartOfAccountWhereUniqueInput | null;
  customers?: CustomerUpdateManyWithoutEntitiesInput;
  info?: InputJsonValue;
  items?: ItemUpdateManyWithoutEntitiesInput;
  ledgers?: LedgerUpdateManyWithoutEntitiesInput;
  name?: string | null;
  users?: UserUpdateManyWithoutEntitiesInput;
};
