import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { ItemTitle } from "../item/ItemTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cash account" source="cashAccount" />
        <ReferenceInput source="Client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <SelectInput
          source="docType"
          label="doc_type"
          choices={[
            { label: "Invoice", value: "Invoice" },
            { label: "Receipt", value: "Receipt" },
            { label: "bill", value: "Bill" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="dueDate" source="dueDate" />
        <ReferenceArrayInput
          source="items"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="prepaid account" source="prepaidAccount" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Draft", value: "Draft" },
            { label: "Approved", value: "Approved" },
            { label: "Paid", value: "Paid" },
            { label: "Canceled", value: "Canceled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <TextInput label="unearned account" source="unearnedAccount" />
      </SimpleForm>
    </Edit>
  );
};
