import { SortOrder } from "../../util/SortOrder";

export type JournalOrderByInput = {
  createdAt?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  ledgerId?: SortOrder;
  updatedAt?: SortOrder;
};
