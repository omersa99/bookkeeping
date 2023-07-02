import { AccountUpdateManyWithoutChartOfAccountsInput } from "./AccountUpdateManyWithoutChartOfAccountsInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ChartOfAccountUpdateInput = {
  accountsSet?: AccountUpdateManyWithoutChartOfAccountsInput;
  description?: string | null;
  entity?: EntityWhereUniqueInput | null;
};
