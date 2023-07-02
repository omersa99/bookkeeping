import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JournalListRelationFilter } from "../journal/JournalListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LedgerWhereInput = {
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  journals?: JournalListRelationFilter;
  name?: StringNullableFilter;
};
