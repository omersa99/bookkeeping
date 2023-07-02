import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type CustomerCreateInput = {
  customerName?: string | null;
  entity?: EntityWhereUniqueInput | null;
  info?: InputJsonValue;
};
