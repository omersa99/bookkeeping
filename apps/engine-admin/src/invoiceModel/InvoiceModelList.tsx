import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ITEMTRANSACTION_TITLE_FIELD } from "../itemTransaction/ItemTransactionTitle";

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
      </Datagrid>
    </List>
  );
};
