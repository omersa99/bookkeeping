import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { ItemUpdateManyWithoutAccountsInput } from "./ItemUpdateManyWithoutAccountsInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  active?: boolean | null;
  code?: string | null;
  DefaultAccountType?: "Debit" | "Credit" | null;
  documents?: DocumentWhereUniqueInput | null;
  items?: ItemUpdateManyWithoutAccountsInput;
  name?: string | null;
  role?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
