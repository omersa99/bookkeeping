import { DocumentUpdateManyWithoutSuppliersInput } from "./DocumentUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  active?: string | null;
  documents?: DocumentUpdateManyWithoutSuppliersInput;
  name?: string | null;
};
