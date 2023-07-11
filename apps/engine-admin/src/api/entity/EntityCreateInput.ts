import { AccountCreateNestedManyWithoutEntitiesInput } from "./AccountCreateNestedManyWithoutEntitiesInput";
import { CustomerCreateNestedManyWithoutEntitiesInput } from "./CustomerCreateNestedManyWithoutEntitiesInput";
import { InvoiceModelCreateNestedManyWithoutEntitiesInput } from "./InvoiceModelCreateNestedManyWithoutEntitiesInput";
import { ItemCreateNestedManyWithoutEntitiesInput } from "./ItemCreateNestedManyWithoutEntitiesInput";
import { LedgerCreateNestedManyWithoutEntitiesInput } from "./LedgerCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityCreateInput = {
  accountingType?: "Cash" | "Cumulative" | null;
  accounts?: AccountCreateNestedManyWithoutEntitiesInput;
  address?: string | null;
  customers?: CustomerCreateNestedManyWithoutEntitiesInput;
  deductionId?: string | null;
  deductionRate?: string | null;
  exemption?: boolean | null;
  invoiceModels?: InvoiceModelCreateNestedManyWithoutEntitiesInput;
  items?: ItemCreateNestedManyWithoutEntitiesInput;
  ledgers?: LedgerCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  taxId?: string | null;
  user?: UserWhereUniqueInput | null;
};
