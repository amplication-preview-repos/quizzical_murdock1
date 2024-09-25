import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOCALE_TITLE_FIELD } from "../locale/LocaleTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const PropertyTranslationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PropertyTranslations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="locale" source="locale.id" reference="Locale">
          <TextField source={LOCALE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="property"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
