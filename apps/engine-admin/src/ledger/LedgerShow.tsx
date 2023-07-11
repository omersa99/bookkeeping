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

import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";
import { LEDGER_TITLE_FIELD } from "./LedgerTitle";
import { INVOICEMODEL_TITLE_FIELD } from "../invoiceModel/InvoiceModelTitle";

export const LedgerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="InvoiceModels"
          source="invoicemodel.id"
          reference="InvoiceModel"
        >
          <TextField source={INVOICEMODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Journal"
          target="ledgerId"
          label="journals"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="entity"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="ledger"
              source="ledger.id"
              reference="Ledger"
            >
              <TextField source={LEDGER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
