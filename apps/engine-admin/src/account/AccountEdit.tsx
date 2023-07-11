import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
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
        <NumberInput step={1} label="balance" source="balance" />
        <TextInput label="balanceType" source="balanceType" />
        <TextInput label="code" source="code" />
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <SelectInput
          source="role"
          label="role"
          choices={[
            { label: "ASSET", value: "Asset" },
            { label: "LIABILITY", value: "Liability" },
            { label: "INCOME", value: "Income" },
            { label: "COGS", value: "Cogs" },
            { label: "Expenses", value: "Expenses" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
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
