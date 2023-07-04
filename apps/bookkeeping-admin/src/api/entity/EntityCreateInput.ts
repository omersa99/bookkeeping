import { ClientCreateNestedManyWithoutEntitiesInput } from "./ClientCreateNestedManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemCreateNestedManyWithoutEntitiesInput } from "./ItemCreateNestedManyWithoutEntitiesInput";

export type EntityCreateInput = {
  accrualMethod?: boolean | null;
  customers?: ClientCreateNestedManyWithoutEntitiesInput;
  info?: InputJsonValue;
  items?: ItemCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
};
