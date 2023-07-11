import { ChartOfAccountWhereUniqueInput } from "../chartOfAccount/ChartOfAccountWhereUniqueInput";
import { CustomerUpdateManyWithoutEntitiesInput } from "./CustomerUpdateManyWithoutEntitiesInput";
import { InvoiceModelUpdateManyWithoutEntitiesInput } from "./InvoiceModelUpdateManyWithoutEntitiesInput";
import { ItemUpdateManyWithoutEntitiesInput } from "./ItemUpdateManyWithoutEntitiesInput";
import { JournalUpdateManyWithoutEntitiesInput } from "./JournalUpdateManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityUpdateInput = {
  accountingType?: "Cash" | "Cumulative" | null;
  address?: string | null;
  coa?: ChartOfAccountWhereUniqueInput | null;
  customers?: CustomerUpdateManyWithoutEntitiesInput;
  deductionId?: string | null;
  deductionRate?: string | null;
  exemption?: boolean | null;
  invoiceModels?: InvoiceModelUpdateManyWithoutEntitiesInput;
  items?: ItemUpdateManyWithoutEntitiesInput;
  journals?: JournalUpdateManyWithoutEntitiesInput;
  name?: string | null;
  taxId?: string | null;
  user?: UserWhereUniqueInput | null;
};
