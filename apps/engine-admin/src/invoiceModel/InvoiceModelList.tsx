import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { LEDGER_TITLE_FIELD } from "../ledger/LedgerTitle";

export const InvoiceModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InvoiceModels"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="ledger" source="ledger.id" reference="Ledger">
          <TextField source={LEDGER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
