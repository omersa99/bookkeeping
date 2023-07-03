import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";
import { ClientTitle } from "../client/ClientTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="cashAccount.id"
          reference="Account"
          label="cash account"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
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
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};