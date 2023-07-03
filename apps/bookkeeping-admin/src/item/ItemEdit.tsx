import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { EntityTitle } from "../entity/EntityTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
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
        <TextInput label="item_type" source="itemType" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
