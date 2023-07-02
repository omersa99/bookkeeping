import { StringFilter } from "../../util/StringFilter";
import { JournalWhereUniqueInput } from "../journal/JournalWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  journal?: JournalWhereUniqueInput;
};
