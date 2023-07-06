import { InvoiceModelWhereInput } from "./InvoiceModelWhereInput";
import { InvoiceModelOrderByInput } from "./InvoiceModelOrderByInput";

export type InvoiceModelFindManyArgs = {
  where?: InvoiceModelWhereInput;
  orderBy?: Array<InvoiceModelOrderByInput>;
  skip?: number;
  take?: number;
};
