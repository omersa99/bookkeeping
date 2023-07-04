import { ClientCreateNestedManyWithoutEntitiesInput } from "./ClientCreateNestedManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemCreateNestedManyWithoutEntitiesInput } from "./ItemCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityCreateInput = {
  accrualMethod?: boolean | null;
  customers?: ClientCreateNestedManyWithoutEntitiesInput;
  info?: InputJsonValue;
  items?: ItemCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  uid?: UserWhereUniqueInput | null;
};
