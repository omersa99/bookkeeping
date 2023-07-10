import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="amount paid" source="amountPaid" />
        <ReferenceInput
          source="invoice.id"
          reference="Transaction"
          label="invoice"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
        <SelectInput
          source="paymentMethod"
          label="payment method"
          choices={[
            { label: "CASH", value: "Cash" },
            { label: "CREDIT CARD", value: "CreditCard" },
            { label: "CHECK", value: "Check" },
            { label: "BANK TRANSFER", value: "BankTransfer" },
            { label: "APP", value: "App" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
