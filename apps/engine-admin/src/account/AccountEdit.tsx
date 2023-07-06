import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChartOfAccountTitle } from "../chartOfAccount/ChartOfAccountTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="balanceType" source="balanceType" />
        <ReferenceArrayInput
          source="chartOfAccount"
          reference="ChartOfAccount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChartOfAccountTitle} />
        </ReferenceArrayInput>
        <TextInput label="code" source="code" />
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
