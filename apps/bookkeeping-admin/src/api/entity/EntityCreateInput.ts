import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerCreateNestedManyWithoutEntitiesInput } from "./CustomerCreateNestedManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemCreateNestedManyWithoutEntitiesInput } from "./ItemCreateNestedManyWithoutEntitiesInput";
import { LedgerCreateNestedManyWithoutEntitiesInput } from "./LedgerCreateNestedManyWithoutEntitiesInput";
import { UserCreateNestedManyWithoutEntitiesInput } from "./UserCreateNestedManyWithoutEntitiesInput";

export type EntityCreateInput = {
  accrualMethod?: boolean | null;
  chartOfAccounts?: ChartOfAccountWhereUniqueInput | null;
  customers?: CustomerCreateNestedManyWithoutEntitiesInput;
  info?: InputJsonValue;
  items?: ItemCreateNestedManyWithoutEntitiesInput;
  ledgers?: LedgerCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  users?: UserCreateNestedManyWithoutEntitiesInput;
};
