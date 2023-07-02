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
        <TextField label="amount" source="Amount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
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
