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
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount paid" source="amountPaid" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="invoice"
          source="transaction.id"
          reference="Transaction"
        >
          <TextField source={TRANSACTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="payment method" source="paymentMethod" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
