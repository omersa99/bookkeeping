import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { LedgerCreateNestedManyWithoutEntitiesInput } from "./LedgerCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityCreateInput = {
  coa?: ChartOfAccountWhereUniqueInput | null;
  ledgers?: LedgerCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
