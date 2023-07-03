import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const MetaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput label="bankAccount" source="bankAccount" />
        <TextInput label="category" source="category" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="paymentTerms" source="paymentTerms" />
        <SelectInput
          source="paymentType"
          label="paymentType"
          choices={[
            { label: "without type", value: "WithoutType" },
            { label: "cash", value: "Cash" },
            { label: "Credit Card", value: "CreditCard" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="taxId" source="taxId" />
      </SimpleForm>
    </Edit>
  );
};
