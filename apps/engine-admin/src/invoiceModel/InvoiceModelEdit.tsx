import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { LedgerTitle } from "../ledger/LedgerTitle";

export const InvoiceModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amount_due" source="amountDue" />
        <TextInput label="amount_paid" source="amountPaid" />
        <ReferenceInput
          source="cashAccount.id"
          reference="Account"
          label="cash_account"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
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
        <ReferenceInput source="ledger.id" reference="Ledger" label="ledger">
          <SelectInput optionText={LedgerTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "draft", value: "Draft" },
            { label: "paid", value: "Paid" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
