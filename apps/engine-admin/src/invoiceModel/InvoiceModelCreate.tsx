import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { EntityTitle } from "../entity/EntityTitle";
import { ItemTitle } from "../item/ItemTitle";
import { LedgerTitle } from "../ledger/LedgerTitle";

export const InvoiceModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount_due" source="amountDue" />
        <TextInput label="amount_paid" source="amountPaid" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <TextInput label="info" source="info" />
        <TextInput label="invoice_number" source="invoiceNumber" />
        <SelectInput
          source="invoiceStatus"
          label="invoice_status"
          choices={[
            { label: "draft", value: "Draft" },
            { label: "paid", value: "Paid" },
            { label: "canceled", value: "Canceled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="item"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="ledger.id" reference="Ledger" label="ledger">
          <SelectInput optionText={LedgerTitle} />
        </ReferenceInput>
        <NumberInput label="price per unit" source="pricePerUnit" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
