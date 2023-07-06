import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";
import { JournalTitle } from "../journal/JournalTitle";

export const LedgerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="journals"
          reference="Journal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JournalTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
