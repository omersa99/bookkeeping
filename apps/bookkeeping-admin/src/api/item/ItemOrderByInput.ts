import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  Amount?: SortOrder;
  createdAt?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  isProductOrService?: SortOrder;
  itemRole?: SortOrder;
  itemType?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
