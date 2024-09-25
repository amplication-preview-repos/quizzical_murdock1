import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PropertyTitle } from "../property/PropertyTitle";

export const ImageCustomFieldEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="Property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
