import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";
import { JournalTitle } from "../journal/JournalTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="journal.id" reference="Journal" label="journal">
          <SelectInput optionText={JournalTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="payments.id"
          reference="Payment"
          label="Payments"
        >
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <SelectInput
          source="transactionType"
          label="transaction type"
          choices={[
            { label: "debit", value: "Debit" },
            { label: "credit", value: "Credit" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
