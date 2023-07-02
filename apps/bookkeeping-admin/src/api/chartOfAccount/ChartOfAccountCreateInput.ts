import { AccountCreateNestedManyWithoutChartOfAccountsInput } from "./AccountCreateNestedManyWithoutChartOfAccountsInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ChartOfAccountCreateInput = {
  accountsSet?: AccountCreateNestedManyWithoutChartOfAccountsInput;
  description?: string | null;
  entity?: EntityWhereUniqueInput | null;
};
