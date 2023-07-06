import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerUpdateManyWithoutEntitiesInput } from "./CustomerUpdateManyWithoutEntitiesInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ItemTransactionUpdateManyWithoutEntitiesInput } from "./ItemTransactionUpdateManyWithoutEntitiesInput";
import { JournalUpdateManyWithoutEntitiesInput } from "./JournalUpdateManyWithoutEntitiesInput";
import { LedgerUpdateManyWithoutEntitiesInput } from "./LedgerUpdateManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityUpdateInput = {
  coa?: ChartOfAccountWhereUniqueInput | null;
  customers?: CustomerUpdateManyWithoutEntitiesInput;
  items?: ItemWhereUniqueInput | null;
  itemTransactions?: ItemTransactionUpdateManyWithoutEntitiesInput;
  journals?: JournalUpdateManyWithoutEntitiesInput;
  ledgers?: LedgerUpdateManyWithoutEntitiesInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
