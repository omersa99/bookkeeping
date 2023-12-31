import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";
import { INVOICEMODEL_TITLE_FIELD } from "../invoiceModel/InvoiceModelTitle";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField label="entity" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="InvoiceModels"
          source="invoicemodel.id"
          reference="InvoiceModel"
        >
          <TextField source={INVOICEMODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
