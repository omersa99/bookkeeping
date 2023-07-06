import { AccountUpdateManyWithoutChartOfAccountsInput } from "./AccountUpdateManyWithoutChartOfAccountsInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type ChartOfAccountUpdateInput = {
  accounts?: AccountUpdateManyWithoutChartOfAccountsInput;
  entity?: EntityWhereUniqueInput | null;
};
