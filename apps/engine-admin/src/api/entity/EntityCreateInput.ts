import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerCreateNestedManyWithoutEntitiesInput } from "./CustomerCreateNestedManyWithoutEntitiesInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ItemTransactionCreateNestedManyWithoutEntitiesInput } from "./ItemTransactionCreateNestedManyWithoutEntitiesInput";
import { JournalCreateNestedManyWithoutEntitiesInput } from "./JournalCreateNestedManyWithoutEntitiesInput";
import { LedgerCreateNestedManyWithoutEntitiesInput } from "./LedgerCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityCreateInput = {
  coa?: ChartOfAccountWhereUniqueInput | null;
  customers?: CustomerCreateNestedManyWithoutEntitiesInput;
  items?: ItemWhereUniqueInput | null;
  itemTransactions?: ItemTransactionCreateNestedManyWithoutEntitiesInput;
  journals?: JournalCreateNestedManyWithoutEntitiesInput;
  ledgers?: LedgerCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
