import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ItemTitle } from "../item/ItemTitle";

export const ItemTransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="item.id" reference="Item" label="item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="total cost" source="totalCost" />
        <SelectInput
          source="transactionType"
          label="transaction type"
          choices={[
            { label: "Purchase", value: "Purchase" },
            { label: "Return", value: "Return" },
            { label: "Adjustment", value: "Adjustment" },
            { label: "Sold", value: "Sold" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="unitPrice" source="unitPrice" />
      </SimpleForm>
    </Edit>
  );
};
