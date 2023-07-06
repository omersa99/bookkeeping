import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChartOfAccountTitle } from "../chartOfAccount/ChartOfAccountTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
