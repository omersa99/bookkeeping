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

import { ChartOfAccountTitle } from "../chartOfAccount/ChartOfAccountTitle";
import { ItemTitle } from "../item/ItemTitle";
import { ItemTransactionTitle } from "../itemTransaction/ItemTransactionTitle";
import { LedgerTitle } from "../ledger/LedgerTitle";
import { UserTitle } from "../user/UserTitle";

export const EntityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="coa.id" reference="ChartOfAccount" label="coa">
          <SelectInput optionText={ChartOfAccountTitle} />
        </ReferenceInput>
        <ReferenceInput source="items.id" reference="Item" label="items">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="itemTransactions"
          reference="ItemTransaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTransactionTitle} />
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
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
