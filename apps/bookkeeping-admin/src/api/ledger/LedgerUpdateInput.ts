import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type LedgerUpdateInput = {
  entity?: EntityWhereUniqueInput | null;
  name?: string | null;
};
