import { PropertyTranslation as TPropertyTranslation } from "../api/propertyTranslation/PropertyTranslation";

export const PROPERTYTRANSLATION_TITLE_FIELD = "id";

export const PropertyTranslationTitle = (
  record: TPropertyTranslation
): string => {
  return record.id?.toString() || String(record.id);
};
