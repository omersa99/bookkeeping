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
            <TextField label="transaction type" source="transactionType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
