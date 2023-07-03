import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EntityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Entities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="accrual_method" source="accrualMethod" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="info" source="info" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
