import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { ImageCustomFieldTitle } from "../imageCustomField/ImageCustomFieldTitle";
import { ListCustomFieldTitle } from "../listCustomField/ListCustomFieldTitle";
import { NormalCustomFieldTitle } from "../normalCustomField/NormalCustomFieldTitle";
import { PropertyTranslationTitle } from "../propertyTranslation/PropertyTranslationTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceArrayInput source="appointments" reference="Appointment">
          <SelectArrayInput
            optionText={AppointmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="imageCustomFields"
          reference="ImageCustomField"
        >
          <SelectArrayInput
            optionText={ImageCustomFieldTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="listCustomFields"
          reference="ListCustomField"
        >
          <SelectArrayInput
            optionText={ListCustomFieldTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="normalCustomFields"
          reference="NormalCustomField"
        >
          <SelectArrayInput
            optionText={NormalCustomFieldTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="price" source="price" />
        <ReferenceArrayInput
          source="propertyTranslations"
          reference="PropertyTranslation"
        >
          <SelectArrayInput
            optionText={PropertyTranslationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="size" source="size" />
      </SimpleForm>
    </Edit>
  );
};
