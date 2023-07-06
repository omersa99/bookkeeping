import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";
import { InvoiceModelTitle } from "../invoiceModel/InvoiceModelTitle";
import { ItemTitle } from "../item/ItemTitle";

export const ItemTransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="invoiceModel.id"
          reference="InvoiceModel"
          label="invoice_model"
        >
          <SelectInput optionText={InvoiceModelTitle} />
        </ReferenceInput>
        <ReferenceInput source="item.id" reference="Item" label="item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="total_amount" source="totalAmount" />
        <TextInput label="unit_cost" source="unitCost" />
      </SimpleForm>
    </Edit>
  );
};
