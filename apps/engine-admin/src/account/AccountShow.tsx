import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { LEDGER_TITLE_FIELD } from "../ledger/LedgerTitle";
import { JOURNAL_TITLE_FIELD } from "../journal/JournalTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="balance" source="balance" />
        <TextField label="balanceType" source="balanceType" />
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InvoiceModel"
          target="cashAccountId"
          label="InvoiceModels"
        >
          <Datagrid rowClick="show">
            <TextField label="amount_due" source="amountDue" />
            <TextField label="amount_paid" source="amountPaid" />
            <ReferenceField
              label="cash_account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="info" source="info" />
            <TextField label="invoice_number" source="invoiceNumber" />
            <TextField label="invoice_status" source="invoiceStatus" />
            <ReferenceField label="item" source="item.id" reference="Item">
              <TextField source={ITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ledger"
              source="ledger.id"
              reference="Ledger"
            >
              <TextField source={LEDGER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="accountId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="journal"
              source="journal.id"
              reference="Journal"
            >
              <TextField source={JOURNAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="trxType" source="trxType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
