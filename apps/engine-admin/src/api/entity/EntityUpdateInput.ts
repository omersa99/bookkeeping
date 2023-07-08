import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerUpdateManyWithoutEntitiesInput } from "./CustomerUpdateManyWithoutEntitiesInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { JournalUpdateManyWithoutEntitiesInput } from "./JournalUpdateManyWithoutEntitiesInput";
import { LedgerUpdateManyWithoutEntitiesInput } from "./LedgerUpdateManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityUpdateInput = {
  accountingType?: "Cash" | "Cumulative" | null;
  address?: string | null;
  coa?: ChartOfAccountWhereUniqueInput | null;
  customers?: CustomerUpdateManyWithoutEntitiesInput;
  deductionId?: string | null;
  deductionRate?: string | null;
  exemption?: boolean | null;
  items?: ItemWhereUniqueInput | null;
  journals?: JournalUpdateManyWithoutEntitiesInput;
  ledgers?: LedgerUpdateManyWithoutEntitiesInput;
  name?: string | null;
  taxId?: string | null;
  user?: UserWhereUniqueInput | null;
};
