import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="additional_info" source="additionalInfo" />
        <TextInput label="amount" source="Amount" />
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <SelectInput
          source="itemRole"
          label="item_role"
          choices={[
            { label: "expense", value: "Expense" },
            { label: "inventory", value: "Inventory" },
            { label: "service", value: "Service" },
            { label: "product", value: "Product" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
