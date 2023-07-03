import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="additional_info" source="additionalInfo" />
        <TextInput label="amount" source="Amount" />
        <TextInput label="cogs_account" source="cogsAccount" />
        <TextInput label="earnings_account" source="earningsAccount" />
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <TextInput label="expense_account" source="expenseAccount" />
        <TextInput label="inventory_account" source="inventoryAccount" />
        <BooleanInput label="is_inventory" source="isInventory" />
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
    </Create>
  );
};
