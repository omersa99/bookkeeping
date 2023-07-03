import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { CLIENT_TITLE_FIELD } from "./ClientTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";

export const ClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer_name" source="customerName" />
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="info" source="info" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Document"
          target="ClientId"
          label="Documents"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="cash account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="doc_type" source="docType" />
            <TextField label="dueDate" source="dueDate" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Supplier"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
