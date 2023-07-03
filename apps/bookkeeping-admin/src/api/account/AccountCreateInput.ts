import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { ItemCreateNestedManyWithoutAccountsInput } from "./ItemCreateNestedManyWithoutAccountsInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  active?: boolean | null;
  code?: string | null;
  DefaultAccountType?: "Debit" | "Credit" | null;
  documents?: DocumentWhereUniqueInput | null;
  items?: ItemCreateNestedManyWithoutAccountsInput;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
