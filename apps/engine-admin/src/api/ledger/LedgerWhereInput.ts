import { StringFilter } from "../../util/StringFilter";
import { InvoiceModelWhereUniqueInput } from "../invoiceModel/InvoiceModelWhereUniqueInput";
import { JournalListRelationFilter } from "../journal/JournalListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LedgerWhereInput = {
  id?: StringFilter;
  invoiceModels?: InvoiceModelWhereUniqueInput;
  journals?: JournalListRelationFilter;
  name?: StringNullableFilter;
};
