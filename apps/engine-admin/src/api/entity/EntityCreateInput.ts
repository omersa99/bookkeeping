import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ItemTransactionCreateNestedManyWithoutEntitiesInput } from "./ItemTransactionCreateNestedManyWithoutEntitiesInput";
import { LedgerCreateNestedManyWithoutEntitiesInput } from "./LedgerCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityCreateInput = {
  coa?: ChartOfAccountWhereUniqueInput | null;
  items?: ItemWhereUniqueInput | null;
  itemTransactions?: ItemTransactionCreateNestedManyWithoutEntitiesInput;
  ledgers?: LedgerCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
