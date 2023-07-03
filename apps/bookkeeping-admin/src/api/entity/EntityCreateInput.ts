import { CustomerCreateNestedManyWithoutEntitiesInput } from "./CustomerCreateNestedManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemCreateNestedManyWithoutEntitiesInput } from "./ItemCreateNestedManyWithoutEntitiesInput";
import { UserCreateNestedManyWithoutEntitiesInput } from "./UserCreateNestedManyWithoutEntitiesInput";

export type EntityCreateInput = {
  accrualMethod?: boolean | null;
  customers?: CustomerCreateNestedManyWithoutEntitiesInput;
  info?: InputJsonValue;
  items?: ItemCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  users?: UserCreateNestedManyWithoutEntitiesInput;
};
