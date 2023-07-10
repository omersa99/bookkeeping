import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ChartOfAccountTitle } from "../chartOfAccount/ChartOfAccountTitle";
import { InvoiceModelTitle } from "../invoiceModel/InvoiceModelTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="balance" source="balance" />
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
        <ReferenceArrayInput
          source="invoiceModels"
          reference="InvoiceModel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceModelTitle} />
        </ReferenceArrayInput>
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
    </Create>
  );
};
