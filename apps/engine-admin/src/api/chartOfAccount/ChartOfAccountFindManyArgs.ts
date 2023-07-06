import { ChartOfAccountWhereInput } from "./ChartOfAccountWhereInput";
import { ChartOfAccountOrderByInput } from "./ChartOfAccountOrderByInput";

export type ChartOfAccountFindManyArgs = {
  where?: ChartOfAccountWhereInput;
  orderBy?: Array<ChartOfAccountOrderByInput>;
  skip?: number;
  take?: number;
};
