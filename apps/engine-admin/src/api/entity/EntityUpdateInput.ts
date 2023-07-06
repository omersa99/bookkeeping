import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ItemTransactionUpdateManyWithoutEntitiesInput } from "./ItemTransactionUpdateManyWithoutEntitiesInput";
import { LedgerUpdateManyWithoutEntitiesInput } from "./LedgerUpdateManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityUpdateInput = {
  coa?: ChartOfAccountWhereUniqueInput | null;
  items?: ItemWhereUniqueInput | null;
  itemTransactions?: ItemTransactionUpdateManyWithoutEntitiesInput;
  ledgers?: LedgerUpdateManyWithoutEntitiesInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
