import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MetaWhereInput = {
  active?: BooleanNullableFilter;
  bankAccount?: StringNullableFilter;
  category?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  paymentTerms?: StringNullableFilter;
  paymentType?: "WithoutType" | "Cash" | "CreditCard";
  taxId?: StringNullableFilter;
};
