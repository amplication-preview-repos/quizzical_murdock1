import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { ImageCustomFieldCreateNestedManyWithoutPropertiesInput } from "./ImageCustomFieldCreateNestedManyWithoutPropertiesInput";
import { ListCustomFieldCreateNestedManyWithoutPropertiesInput } from "./ListCustomFieldCreateNestedManyWithoutPropertiesInput";
import { NormalCustomFieldCreateNestedManyWithoutPropertiesInput } from "./NormalCustomFieldCreateNestedManyWithoutPropertiesInput";
import { PropertyTranslationCreateNestedManyWithoutPropertiesInput } from "./PropertyTranslationCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
  imageCustomFields?: ImageCustomFieldCreateNestedManyWithoutPropertiesInput;
  listCustomFields?: ListCustomFieldCreateNestedManyWithoutPropertiesInput;
  normalCustomFields?: NormalCustomFieldCreateNestedManyWithoutPropertiesInput;
  price?: number | null;
  propertyTranslations?: PropertyTranslationCreateNestedManyWithoutPropertiesInput;
  size?: number | null;
};
