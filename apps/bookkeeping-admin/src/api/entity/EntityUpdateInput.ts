import { ClientUpdateManyWithoutEntitiesInput } from "./ClientUpdateManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemUpdateManyWithoutEntitiesInput } from "./ItemUpdateManyWithoutEntitiesInput";
import { UserUpdateManyWithoutEntitiesInput } from "./UserUpdateManyWithoutEntitiesInput";

export type EntityUpdateInput = {
  accrualMethod?: boolean | null;
  customers?: ClientUpdateManyWithoutEntitiesInput;
  info?: InputJsonValue;
  items?: ItemUpdateManyWithoutEntitiesInput;
  name?: string | null;
  users?: UserUpdateManyWithoutEntitiesInput;
};
