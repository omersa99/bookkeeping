import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type CustomerUpdateInput = {
  customerName?: string | null;
  entity?: EntityWhereUniqueInput | null;
  info?: InputJsonValue;
};
