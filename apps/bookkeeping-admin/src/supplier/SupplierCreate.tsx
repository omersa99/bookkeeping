import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="active" source="active" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
