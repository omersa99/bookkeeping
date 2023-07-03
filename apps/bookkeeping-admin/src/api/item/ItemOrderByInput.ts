import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  additionalInfo?: SortOrder;
  Amount?: SortOrder;
  createdAt?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  itemRole?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
