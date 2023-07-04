import { ClientCreateNestedManyWithoutEntitiesInput } from "./ClientCreateNestedManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemCreateNestedManyWithoutEntitiesInput } from "./ItemCreateNestedManyWithoutEntitiesInput";

export type EntityCreateInput = {
  accrualMethod?: boolean | null;
  customers?: ClientCreateNestedManyWithoutEntitiesInput;
  deductionRate?: string | null;
  info?: InputJsonValue;
  irsId?: string | null;
  items?: ItemCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
};
