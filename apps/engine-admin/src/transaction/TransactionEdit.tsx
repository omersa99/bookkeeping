import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";
import { JournalTitle } from "../journal/JournalTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="journal.id" reference="Journal" label="journal">
          <SelectInput optionText={JournalTitle} />
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
    </Edit>
  );
};
