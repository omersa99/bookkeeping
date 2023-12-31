import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { InvoiceModelTitle } from "../invoiceModel/InvoiceModelTitle";
import { ItemTitle } from "../item/ItemTitle";
import { LedgerTitle } from "../ledger/LedgerTitle";
import { UserTitle } from "../user/UserTitle";

export const EntityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <TextInput label="address" source="address" />
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
        <ReferenceArrayInput
          source="invoiceModels"
          reference="InvoiceModel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceModelTitle} />
        </ReferenceArrayInput>
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
        <TextInput label="taxId" source="taxId" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
