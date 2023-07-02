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

import { CHARTOFACCOUNT_TITLE_FIELD } from "./ChartOfAccountTitle";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";

export const ChartOfAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="chartOfAccountId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="balance_type" source="balanceType" />
            <ReferenceField
              label="Chart of Accounts"
              source="chartofaccount.id"
              reference="ChartOfAccount"
            >
              <TextField source={CHARTOFACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="role" source="role" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
