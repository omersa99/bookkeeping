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
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";
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
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="info" source="info" />
        <TextField label="invoice_number" source="invoiceNumber" />
        <TextField label="invoice_status" source="invoiceStatus" />
        <ReferenceField label="ledger" source="ledger.id" reference="Ledger">
          <TextField source={LEDGER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="price per unit" source="pricePerUnit" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
