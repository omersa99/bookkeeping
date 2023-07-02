import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amount" source="Amount" />
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <BooleanInput
          label="is_product_or_service"
          source="isProductOrService"
        />
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
        <SelectInput
          source="itemType"
          label="item_type"
          choices={[
            { label: "labor", value: "Labor" },
            { label: "material", value: "Material" },
            { label: "lump sum", value: "LumpSum" },
            { label: "equipment", value: "Equipment" },
            { label: "other", value: "Other" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
