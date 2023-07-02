import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type LedgerCreateInput = {
  entity?: EntityWhereUniqueInput | null;
  name?: string | null;
};
