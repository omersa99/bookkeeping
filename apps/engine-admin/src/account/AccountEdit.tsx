import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="balanceType" source="balanceType" />
        <TextInput label="code" source="code" />
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
