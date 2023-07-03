import { Document } from "../document/Document";

export type Supplier = {
  active: string | null;
  createdAt: Date;
  documents?: Array<Document>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
