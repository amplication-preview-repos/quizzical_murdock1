import { Appointment } from "../appointment/Appointment";
import { ImageCustomField } from "../imageCustomField/ImageCustomField";
import { ListCustomField } from "../listCustomField/ListCustomField";
import { NormalCustomField } from "../normalCustomField/NormalCustomField";
import { PropertyTranslation } from "../propertyTranslation/PropertyTranslation";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  id: string;
  imageCustomFields?: Array<ImageCustomField>;
  listCustomFields?: Array<ListCustomField>;
  normalCustomFields?: Array<NormalCustomField>;
  price: number | null;
  propertyTranslations?: Array<PropertyTranslation>;
  size: number | null;
  updatedAt: Date;
};
