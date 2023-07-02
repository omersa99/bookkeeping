import { SortOrder } from "../../util/SortOrder";

export type JournalOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ledgerId?: SortOrder;
  updatedAt?: SortOrder;
};
