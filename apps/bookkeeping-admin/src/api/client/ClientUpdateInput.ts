import { DocumentUpdateManyWithoutClientsInput } from "./DocumentUpdateManyWithoutClientsInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ClientUpdateInput = {
  customerName?: string | null;
  documents?: DocumentUpdateManyWithoutClientsInput;
  entity?: EntityWhereUniqueInput | null;
  info?: InputJsonValue;
};
