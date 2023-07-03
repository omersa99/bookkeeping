import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { EntityTitle } from "../entity/EntityTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput label="additional_info" source="additionalInfo" />
        <TextInput label="amount" source="Amount" />
        <TextInput label="cogs account" source="cogsAccount" />
        <ReferenceArrayInput
          source="document"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <TextInput label="earnings account" source="earningsAccount" />
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <TextInput label="expense_account" source="expenseAccount" />
        <TextInput label="inventory account" source="inventoryAccount" />
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
        <TextInput label="item type" source="itemType" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
