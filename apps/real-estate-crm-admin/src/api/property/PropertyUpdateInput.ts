import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { ImageCustomFieldUpdateManyWithoutPropertiesInput } from "./ImageCustomFieldUpdateManyWithoutPropertiesInput";
import { ListCustomFieldUpdateManyWithoutPropertiesInput } from "./ListCustomFieldUpdateManyWithoutPropertiesInput";
import { NormalCustomFieldUpdateManyWithoutPropertiesInput } from "./NormalCustomFieldUpdateManyWithoutPropertiesInput";
import { PropertyTranslationUpdateManyWithoutPropertiesInput } from "./PropertyTranslationUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  description?: string | null;
  imageCustomFields?: ImageCustomFieldUpdateManyWithoutPropertiesInput;
  listCustomFields?: ListCustomFieldUpdateManyWithoutPropertiesInput;
  normalCustomFields?: NormalCustomFieldUpdateManyWithoutPropertiesInput;
  price?: number | null;
  propertyTranslations?: PropertyTranslationUpdateManyWithoutPropertiesInput;
  size?: number | null;
};
