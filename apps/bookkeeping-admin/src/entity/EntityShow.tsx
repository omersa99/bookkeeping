import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ENTITY_TITLE_FIELD } from "./EntityTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EntityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="accrual_method" source="accrualMethod" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="info" source="info" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Client"
          target="entityId"
          label="clients"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="customer_name" source="customerName" />
            <ReferenceField
              label="entity"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="info" source="info" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Item" target="entityId" label="Items">
          <Datagrid rowClick="show">
            <ReferenceField
              label="account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="additional_info" source="additionalInfo" />
            <TextField label="amount" source="Amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="entity"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="item_role" source="itemRole" />
            <TextField label="item_type" source="itemType" />
            <TextField label="name" source="name" />
            <TextField label="price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
