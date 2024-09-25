import { NormalCustomField as TNormalCustomField } from "../api/normalCustomField/NormalCustomField";

export const NORMALCUSTOMFIELD_TITLE_FIELD = "label";

export const NormalCustomFieldTitle = (record: TNormalCustomField): string => {
  return record.label?.toString() || String(record.id);
};
