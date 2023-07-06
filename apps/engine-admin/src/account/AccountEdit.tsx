import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="balanceType" source="balanceType" />
        <TextInput label="code" source="code" />
        <ReferenceArrayInput
          source="entity"
          reference="Entity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EntityTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
