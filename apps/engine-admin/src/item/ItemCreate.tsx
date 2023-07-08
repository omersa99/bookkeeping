import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cogs_account" source="cogsAccount" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="earnings_account" source="earningsAccount" />
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <TextInput label="inventory_account" source="inventoryAccount" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput label="price per unit" source="pricePerUnit" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
