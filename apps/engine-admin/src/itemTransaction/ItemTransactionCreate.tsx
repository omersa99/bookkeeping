import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";

export const ItemTransactionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="item.id" reference="Item" label="item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="total cost" source="totalCost" />
        <SelectInput
          source="transactionType"
          label="transaction type"
          choices={[
            { label: "Purchase", value: "Purchase" },
            { label: "Return", value: "Return" },
            { label: "Adjustment", value: "Adjustment" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="unitPrice" source="unitPrice" />
      </SimpleForm>
    </Create>
  );
};
