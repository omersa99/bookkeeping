import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EntityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"entities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="accounting Type" source="accountingType" />
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deduction Id" source="deductionId" />
        <TextField label="deductionRate" source="deductionRate" />
        <BooleanField label="exemption" source="exemption" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="taxId" source="taxId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
