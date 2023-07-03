import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  accountId?: SortOrder;
  additionalInfo?: SortOrder;
  Amount?: SortOrder;
  createdAt?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  itemRole?: SortOrder;
  itemType?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
