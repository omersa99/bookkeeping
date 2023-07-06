import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JournalTitle } from "../journal/JournalTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amount" source="amount" />
        <ReferenceInput source="journal.id" reference="Journal" label="journal">
          <SelectInput optionText={JournalTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
