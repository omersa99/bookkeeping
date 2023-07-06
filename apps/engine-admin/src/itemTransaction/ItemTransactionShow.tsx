import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";
import { INVOICEMODEL_TITLE_FIELD } from "../invoiceModel/InvoiceModelTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";

export const ItemTransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="entity" source="entity.id" reference="Entity">
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
      </SimpleShowLayout>
    </Show>
  );
};
