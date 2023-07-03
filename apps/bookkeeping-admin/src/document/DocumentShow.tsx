import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const DocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="doc_type" source="docType" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="ID" source="id" />
        <TextField label="linkedDocumentIds" source="linkedDocumentIds" />
        <TextField label="linkType" source="linkType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vatType" source="vatType" />
      </SimpleShowLayout>
    </Show>
  );
};
