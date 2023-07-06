import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { ItemTransactionTitle } from "../itemTransaction/ItemTransactionTitle";

export const InvoiceModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cash_account" source="cashAccount" />
        <TextInput label="customer" source="customer" />
        <TextInput label="info" source="info" />
        <TextInput label="invoice_number" source="invoiceNumber" />
        <SelectInput
          source="invoiceStatus"
          label="invoice_status"
          choices={[
            { label: "draft", value: "Draft" },
            { label: "paid", value: "Paid" },
            { label: "canceled", value: "Canceled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="itemTransactions.id"
          reference="ItemTransaction"
          label="ItemTransactions"
        >
          <SelectInput optionText={ItemTransactionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
