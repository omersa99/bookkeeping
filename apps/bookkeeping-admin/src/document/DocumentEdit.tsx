import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="Client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <SelectInput
          source="docType"
          label="doc_type"
          choices={[
            { label: "Price Offer", value: "PriceOffer" },
            { label: "Order", value: "Order" },
            { label: "delivery certificate", value: "DeliveryCertificate" },
            { label: "Invoice", value: "Invoice" },
            { label: "Credit invoice", value: "CreditInvoice" },
            { label: "Receipt", value: "Receipt" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="dueDate" source="dueDate" />
        <TextInput label="linkedDocumentIds" source="linkedDocumentIds" />
        <SelectInput
          source="linkType"
          label="linkType"
          choices={[
            { label: "related", value: "Related" },
            { label: "cancelling", value: "Cancelling" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="vatType"
          label="vatType"
          choices={[
            { label: "Default", value: "Default" },
            { label: "Exempt", value: "Exempt" },
            { label: "Mixed", value: "Mixed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
