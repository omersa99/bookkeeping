import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerCreateNestedManyWithoutEntitiesInput } from "./CustomerCreateNestedManyWithoutEntitiesInput";
import { InvoiceModelCreateNestedManyWithoutEntitiesInput } from "./InvoiceModelCreateNestedManyWithoutEntitiesInput";
import { ItemCreateNestedManyWithoutEntitiesInput } from "./ItemCreateNestedManyWithoutEntitiesInput";
import { JournalCreateNestedManyWithoutEntitiesInput } from "./JournalCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityCreateInput = {
  accountingType?: "Cash" | "Cumulative" | null;
  address?: string | null;
  coa?: ChartOfAccountWhereUniqueInput | null;
  customers?: CustomerCreateNestedManyWithoutEntitiesInput;
  deductionId?: string | null;
  deductionRate?: string | null;
  exemption?: boolean | null;
  invoiceModels?: InvoiceModelCreateNestedManyWithoutEntitiesInput;
  items?: ItemCreateNestedManyWithoutEntitiesInput;
  journals?: JournalCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  taxId?: string | null;
  user?: UserWhereUniqueInput | null;
};
