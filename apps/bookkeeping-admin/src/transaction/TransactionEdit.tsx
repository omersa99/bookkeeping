import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JournalTitle } from "../journal/JournalTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="journal.id" reference="Journal" label="Journal">
          <SelectInput optionText={JournalTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
