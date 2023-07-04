import { DocumentCreateNestedManyWithoutClientsInput } from "./DocumentCreateNestedManyWithoutClientsInput";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ClientCreateInput = {
  active?: boolean | null;
  customerName?: string | null;
  documents?: DocumentCreateNestedManyWithoutClientsInput;
  entity?: EntityWhereUniqueInput | null;
  info?: InputJsonValue;
  name?: string | null;
  taxId?: string | null;
};
