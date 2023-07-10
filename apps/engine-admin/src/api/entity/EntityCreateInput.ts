import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerCreateNestedManyWithoutEntitiesInput } from "./CustomerCreateNestedManyWithoutEntitiesInput";
import { ItemCreateNestedManyWithoutEntitiesInput } from "./ItemCreateNestedManyWithoutEntitiesInput";
import { JournalCreateNestedManyWithoutEntitiesInput } from "./JournalCreateNestedManyWithoutEntitiesInput";
import { LedgerCreateNestedManyWithoutEntitiesInput } from "./LedgerCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityCreateInput = {
  accountingType?: "Cash" | "Cumulative" | null;
  address?: string | null;
  coa?: ChartOfAccountWhereUniqueInput | null;
  customers?: CustomerCreateNestedManyWithoutEntitiesInput;
  deductionId?: string | null;
  deductionRate?: string | null;
  exemption?: boolean | null;
  items?: ItemCreateNestedManyWithoutEntitiesInput;
  journals?: JournalCreateNestedManyWithoutEntitiesInput;
  ledgers?: LedgerCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  taxId?: string | null;
  user?: UserWhereUniqueInput | null;
};
