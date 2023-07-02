import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ChartOfAccountTitle } from "../chartOfAccount/ChartOfAccountTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ItemTitle } from "../item/ItemTitle";
import { LedgerTitle } from "../ledger/LedgerTitle";
import { UserTitle } from "../user/UserTitle";

export const EntityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="accrual_method" source="accrualMethod" />
        <ReferenceInput
          source="chartOfAccounts.id"
          reference="ChartOfAccount"
          label="Chart of Accounts"
        >
          <SelectInput optionText={ChartOfAccountTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="customers"
          reference="Customer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerTitle} />
        </ReferenceArrayInput>
        <div />
        <ReferenceArrayInput
          source="items"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ledgers"
          reference="Ledger"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LedgerTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
