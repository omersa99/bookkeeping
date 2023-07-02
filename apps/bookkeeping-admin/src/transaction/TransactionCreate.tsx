import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";
import { JournalTitle } from "../journal/JournalTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="amount" source="amount" />
        <ReferenceInput source="journal.id" reference="Journal" label="Journal">
          <SelectInput optionText={JournalTitle} />
        </ReferenceInput>
        <SelectInput
          source="transactionType"
          label="Transaction type"
          choices={[
            { label: "credit", value: "Credit" },
            { label: "debit", value: "Debit" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
