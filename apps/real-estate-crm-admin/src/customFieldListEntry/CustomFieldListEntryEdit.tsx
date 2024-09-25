import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CustomFieldListEntryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="listEntry" source="listEntry" />
      </SimpleForm>
    </Edit>
  );
};
