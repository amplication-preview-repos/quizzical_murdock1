import { CustomFieldListEntry as TCustomFieldListEntry } from "../api/customFieldListEntry/CustomFieldListEntry";

export const CUSTOMFIELDLISTENTRY_TITLE_FIELD = "listEntry";

export const CustomFieldListEntryTitle = (
  record: TCustomFieldListEntry
): string => {
  return record.listEntry?.toString() || String(record.id);
};
