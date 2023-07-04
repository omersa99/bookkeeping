import { DocumentUpdateManyWithoutClientsInput } from "./DocumentUpdateManyWithoutClientsInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ClientUpdateInput = {
  active?: boolean | null;
  customerName?: string | null;
  documents?: DocumentUpdateManyWithoutClientsInput;
  entity?: EntityWhereUniqueInput | null;
  info?: InputJsonValue;
  name?: string | null;
  taxId?: string | null;
};
