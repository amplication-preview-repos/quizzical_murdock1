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
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const ImageCustomFieldList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ImageCustomFields"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <ReferenceField
          label="Property"
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
