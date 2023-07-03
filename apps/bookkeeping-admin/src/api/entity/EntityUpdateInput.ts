import { CustomerUpdateManyWithoutEntitiesInput } from "./CustomerUpdateManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemUpdateManyWithoutEntitiesInput } from "./ItemUpdateManyWithoutEntitiesInput";
import { UserUpdateManyWithoutEntitiesInput } from "./UserUpdateManyWithoutEntitiesInput";

export type EntityUpdateInput = {
  accrualMethod?: boolean | null;
  customers?: CustomerUpdateManyWithoutEntitiesInput;
  info?: InputJsonValue;
  items?: ItemUpdateManyWithoutEntitiesInput;
  name?: string | null;
  users?: UserUpdateManyWithoutEntitiesInput;
};
