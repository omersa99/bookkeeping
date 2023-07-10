import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ENTITY_TITLE_FIELD } from "./EntityTitle";
import { INVOICEMODEL_TITLE_FIELD } from "../invoiceModel/InvoiceModelTitle";
import { LEDGER_TITLE_FIELD } from "../ledger/LedgerTitle";
import { CHARTOFACCOUNT_TITLE_FIELD } from "../chartOfAccount/ChartOfAccountTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EntityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accounting Type" source="accountingType" />
        <TextField label="address" source="address" />
        <ReferenceField
          label="coa"
          source="chartofaccount.id"
          reference="ChartOfAccount"
        >
          <TextField source={CHARTOFACCOUNT_TITLE_FIELD} />
        </ReferenceField>
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
        <ReferenceManyField
          reference="Customer"
          target="entityId"
          label="Customers"
        >
          <Datagrid rowClick="show">
            <BooleanField label="active" source="active" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="entity"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="sales_tax_rate" source="salesTaxRate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Item" target="entityId" label="items">
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
            <TextField label="price per unit" source="pricePerUnit" />
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Journal"
          target="entityId"
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
        <ReferenceManyField
          reference="Ledger"
          target="entityId"
          label="ledgers"
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
              label="InvoiceModels"
              source="invoicemodel.id"
              reference="InvoiceModel"
            >
              <TextField source={INVOICEMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
