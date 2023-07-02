import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JournalTitle } from "../journal/JournalTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="journal.id" reference="Journal" label="Journal">
          <SelectInput optionText={JournalTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
