import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  entities?: EntityWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
