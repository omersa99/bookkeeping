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
import { INVOICEMODEL_TITLE_FIELD } from "../invoiceModel/InvoiceModelTitle";
import { ITEM_TITLE_FIELD } from "./ItemTitle";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cogs_account" source="cogsAccount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="earnings_account" source="earningsAccount" />
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="inventory_account" source="inventoryAccount" />
        <TextField label="name" source="name" />
        <TextField label="pricePerUnit" source="pricePerUnit" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ItemTransaction"
          target="itemId"
          label="ItemTransactions"
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
              label="invoice_model"
              source="invoicemodel.id"
              reference="InvoiceModel"
            >
              <TextField source={INVOICEMODEL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="item" source="item.id" reference="Item">
              <TextField source={ITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <TextField label="total_amount" source="totalAmount" />
            <TextField label="unit_cost" source="unitCost" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
