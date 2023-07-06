import { SortOrder } from "../../util/SortOrder";

export type EntityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userID?: SortOrder;
};
