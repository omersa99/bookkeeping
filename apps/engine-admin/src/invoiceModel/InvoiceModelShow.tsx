import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";
import { INVOICEMODEL_TITLE_FIELD } from "./InvoiceModelTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { LEDGER_TITLE_FIELD } from "../ledger/LedgerTitle";

export const InvoiceModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount_due" source="amountDue" />
        <TextField label="amount_paid" source="amountPaid" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="info" source="info" />
        <TextField label="invoice_number" source="invoiceNumber" />
        <TextField label="invoice_status" source="invoiceStatus" />
        <ReferenceField label="ledger" source="ledger.id" reference="Ledger">
          <TextField source={LEDGER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="price per unit" source="pricePerUnit" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Item"
          target="invoiceModelsId"
          label="items"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="entity"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceModels"
              source="invoicemodel.id"
              reference="InvoiceModel"
            >
              <TextField source={INVOICEMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <TextField label="price" source="price" />
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
