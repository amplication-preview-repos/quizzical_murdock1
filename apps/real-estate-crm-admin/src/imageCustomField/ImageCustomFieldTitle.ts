import { ImageCustomField as TImageCustomField } from "../api/imageCustomField/ImageCustomField";

export const IMAGECUSTOMFIELD_TITLE_FIELD = "id";

export const ImageCustomFieldTitle = (record: TImageCustomField): string => {
  return record.id?.toString() || String(record.id);
};
