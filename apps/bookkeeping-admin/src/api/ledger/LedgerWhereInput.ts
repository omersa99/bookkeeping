import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LedgerWhereInput = {
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
