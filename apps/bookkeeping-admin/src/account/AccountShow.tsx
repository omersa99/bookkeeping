import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="default Account type" source="DefaultAccountType" />
        <ReferenceField
          label="Documents"
          source="document.id"
          reference="Document"
        >
          <TextField source={DOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Item" target="accountId" label="Items">
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
        <ReferenceManyField
          reference="Transaction"
          target="accountId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Transaction type" source="transactionType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
