import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { EntityTitle } from "../entity/EntityTitle";
import { InvoiceModelTitle } from "../invoiceModel/InvoiceModelTitle";
import { JournalTitle } from "../journal/JournalTitle";

export const LedgerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="entity.id" reference="Entity" label="entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="invoiceModels.id"
          reference="InvoiceModel"
          label="InvoiceModels"
        >
          <SelectInput optionText={InvoiceModelTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="journals"
          reference="Journal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JournalTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
