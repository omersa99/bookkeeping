import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ITEMTRANSACTION_TITLE_FIELD } from "../itemTransaction/ItemTransactionTitle";

export const InvoiceModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cash_account" source="cashAccount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="ID" source="id" />
        <TextField label="info" source="info" />
        <TextField label="invoice_number" source="invoiceNumber" />
        <TextField label="invoice_status" source="invoiceStatus" />
        <ReferenceField
          label="ItemTransactions"
          source="itemtransaction.id"
          reference="ItemTransaction"
        >
          <TextField source={ITEMTRANSACTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
