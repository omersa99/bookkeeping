import { ClientUpdateManyWithoutEntitiesInput } from "./ClientUpdateManyWithoutEntitiesInput";
import { InputJsonValue } from "../../types";
import { ItemUpdateManyWithoutEntitiesInput } from "./ItemUpdateManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntityUpdateInput = {
  accrualMethod?: boolean | null;
  customers?: ClientUpdateManyWithoutEntitiesInput;
  info?: InputJsonValue;
  items?: ItemUpdateManyWithoutEntitiesInput;
  name?: string | null;
  uid?: UserWhereUniqueInput | null;
};
