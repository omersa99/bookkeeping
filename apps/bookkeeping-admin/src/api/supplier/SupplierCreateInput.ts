import { DocumentCreateNestedManyWithoutSuppliersInput } from "./DocumentCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  active?: string | null;
  documents?: DocumentCreateNestedManyWithoutSuppliersInput;
  name?: string | null;
};
