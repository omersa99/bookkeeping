import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceModelListRelationFilter } from "../invoiceModel/InvoiceModelListRelationFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { LedgerListRelationFilter } from "../ledger/LedgerListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityWhereInput = {
  accountingType?: "Cash" | "Cumulative";
  accounts?: AccountListRelationFilter;
  address?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  deductionId?: StringNullableFilter;
  deductionRate?: StringNullableFilter;
  exemption?: BooleanNullableFilter;
  id?: StringFilter;
  invoiceModels?: InvoiceModelListRelationFilter;
  items?: ItemListRelationFilter;
  ledgers?: LedgerListRelationFilter;
  name?: StringNullableFilter;
  taxId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
