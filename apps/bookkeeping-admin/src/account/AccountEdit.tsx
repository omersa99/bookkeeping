import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="balanceType"
          label="balance_type"
          choices={[
            { label: "debit", value: "Debit" },
            { label: "credit", value: "Credit" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="code" source="code" />
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
