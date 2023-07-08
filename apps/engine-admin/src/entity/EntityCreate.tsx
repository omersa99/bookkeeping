import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { ChartOfAccountTitle } from "../chartOfAccount/ChartOfAccountTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ItemTitle } from "../item/ItemTitle";
import { JournalTitle } from "../journal/JournalTitle";
import { LedgerTitle } from "../ledger/LedgerTitle";
import { UserTitle } from "../user/UserTitle";

export const EntityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="accountingType"
          label="accounting Type"
          choices={[
            { label: "cash", value: "Cash" },
            { label: "cumulative", value: "Cumulative" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="address" source="address" />
        <ReferenceInput source="coa.id" reference="ChartOfAccount" label="coa">
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
        <TextInput label="deduction Id" source="deductionId" />
        <TextInput label="deductionRate" source="deductionRate" />
        <BooleanInput label="exemption" source="exemption" />
        <ReferenceInput source="items.id" reference="Item" label="items">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="journals"
          reference="Journal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JournalTitle} />
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
        <TextInput label="taxId" source="taxId" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
