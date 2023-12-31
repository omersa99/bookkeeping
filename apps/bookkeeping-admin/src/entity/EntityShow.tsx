import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ENTITY_TITLE_FIELD } from "./EntityTitle";

export const EntityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="accrual_method" source="accrualMethod" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deductionRate" source="deductionRate" />
        <TextField label="ID" source="id" />
        <TextField label="info" source="info" />
        <TextField label="IRS_ID" source="irsId" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Client"
          target="entityId"
          label="clients"
        >
          <Datagrid rowClick="show">
            <BooleanField label="active" source="active" />
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
            <TextField label="name" source="name" />
            <TextField label="taxId" source="taxId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Item" target="entityId" label="Items">
          <Datagrid rowClick="show">
            <BooleanField label="active" source="active" />
            <TextField label="additional_info" source="additionalInfo" />
            <TextField label="amount" source="Amount" />
            <TextField label="cogs account" source="cogsAccount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="earnings account" source="earningsAccount" />
            <ReferenceField
              label="entity"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="expense_account" source="expenseAccount" />
            <TextField label="ID" source="id" />
            <TextField label="inventory account" source="inventoryAccount" />
            <TextField label="item_role" source="itemRole" />
            <TextField label="item type" source="itemType" />
            <TextField label="name" source="name" />
            <TextField label="price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
