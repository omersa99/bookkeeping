import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { LEDGER_TITLE_FIELD } from "../ledger/LedgerTitle";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="sales_tax_rate" source="salesTaxRate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InvoiceModel"
          target="customerId"
          label="InvoiceModels"
        >
          <Datagrid rowClick="show">
            <TextField label="amount_due" source="amountDue" />
            <TextField label="amount_paid" source="amountPaid" />
            <ReferenceField
              label="cash_account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="info" source="info" />
            <TextField label="invoice_number" source="invoiceNumber" />
            <TextField label="invoice_status" source="invoiceStatus" />
            <ReferenceField label="item" source="item.id" reference="Item">
              <TextField source={ITEM_TITLE_FIELD} />
            </ReferenceField>
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
