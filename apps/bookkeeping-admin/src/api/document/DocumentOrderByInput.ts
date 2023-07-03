import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  ClientId?: SortOrder;
  createdAt?: SortOrder;
  docType?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  linkedDocumentIds?: SortOrder;
  linkType?: SortOrder;
  updatedAt?: SortOrder;
  vatType?: SortOrder;
};
