import { MetaWhereInput } from "./MetaWhereInput";
import { MetaOrderByInput } from "./MetaOrderByInput";

export type MetaFindManyArgs = {
  where?: MetaWhereInput;
  orderBy?: Array<MetaOrderByInput>;
  skip?: number;
  take?: number;
};
