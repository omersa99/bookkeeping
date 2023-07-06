import { AccountCreateNestedManyWithoutChartOfAccountsInput } from "./AccountCreateNestedManyWithoutChartOfAccountsInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ChartOfAccountCreateInput = {
  accounts?: AccountCreateNestedManyWithoutChartOfAccountsInput;
  entity?: EntityWhereUniqueInput | null;
};
