import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="additional_info" source="additionalInfo" />
        <TextField label="amount" source="Amount" />
        <TextField label="cogs_account" source="cogsAccount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="earnings_account" source="earningsAccount" />
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="expense_account" source="expenseAccount" />
        <TextField label="ID" source="id" />
        <TextField label="inventory_account" source="inventoryAccount" />
        <BooleanField label="is_inventory" source="isInventory" />
        <BooleanField
          label="is_product_or_service"
          source="isProductOrService"
        />
        <TextField label="item_role" source="itemRole" />
        <TextField label="item_type" source="itemType" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
