import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cogs_account" source="cogsAccount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="earnings_account" source="earningsAccount" />
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="inventory_account" source="inventoryAccount" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="price per unit" source="pricePerUnit" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
