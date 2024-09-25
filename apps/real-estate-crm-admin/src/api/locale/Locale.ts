import { PropertyTranslation } from "../propertyTranslation/PropertyTranslation";

export type Locale = {
  createdAt: Date;
  id: string;
  name: string | null;
  propertyTranslations?: Array<PropertyTranslation>;
  updatedAt: Date;
};
