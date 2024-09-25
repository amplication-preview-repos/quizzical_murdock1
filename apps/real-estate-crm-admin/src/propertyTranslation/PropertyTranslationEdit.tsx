import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LocaleTitle } from "../locale/LocaleTitle";
import { PropertyTitle } from "../property/PropertyTitle";

export const PropertyTranslationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="locale.id" reference="Locale" label="locale">
          <SelectInput optionText={LocaleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
