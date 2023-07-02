import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChartOfAccountTitle } from "../chartOfAccount/ChartOfAccountTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="balanceType"
          label="balance_type"
          choices={[
            { label: "debit", value: "Debit" },
            { label: "credit", value: "Credit" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="chartOfAccount.id"
          reference="ChartOfAccount"
          label="Chart of Accounts"
        >
          <SelectInput optionText={ChartOfAccountTitle} />
        </ReferenceInput>
        <TextInput label="code" source="code" />
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
