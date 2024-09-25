import { ListCustomField as TListCustomField } from "../api/listCustomField/ListCustomField";

export const LISTCUSTOMFIELD_TITLE_FIELD = "label";

export const ListCustomFieldTitle = (record: TListCustomField): string => {
  return record.label?.toString() || String(record.id);
};
