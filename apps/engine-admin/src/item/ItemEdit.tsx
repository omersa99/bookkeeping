import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";
import { InvoiceModelTitle } from "../invoiceModel/InvoiceModelTitle";
import { ItemTransactionTitle } from "../itemTransaction/ItemTransactionTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="invoiceModels.id"
          reference="InvoiceModel"
          label="InvoiceModels"
        >
          <SelectInput optionText={InvoiceModelTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="itemTransactions"
          reference="ItemTransaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTransactionTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
