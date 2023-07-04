import { ClientUpdateManyWithoutEntitiesInput } from "./ClientUpdateManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemUpdateManyWithoutEntitiesInput } from "./ItemUpdateManyWithoutEntitiesInput";

export type EntityUpdateInput = {
  accrualMethod?: boolean | null;
  customers?: ClientUpdateManyWithoutEntitiesInput;
  deductionRate?: string | null;
  info?: InputJsonValue;
  irsId?: string | null;
  items?: ItemUpdateManyWithoutEntitiesInput;
  name?: string | null;
};
