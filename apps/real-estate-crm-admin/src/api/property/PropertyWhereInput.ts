import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageCustomFieldListRelationFilter } from "../imageCustomField/ImageCustomFieldListRelationFilter";
import { ListCustomFieldListRelationFilter } from "../listCustomField/ListCustomFieldListRelationFilter";
import { NormalCustomFieldListRelationFilter } from "../normalCustomField/NormalCustomFieldListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PropertyTranslationListRelationFilter } from "../propertyTranslation/PropertyTranslationListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageCustomFields?: ImageCustomFieldListRelationFilter;
  listCustomFields?: ListCustomFieldListRelationFilter;
  normalCustomFields?: NormalCustomFieldListRelationFilter;
  price?: IntNullableFilter;
  propertyTranslations?: PropertyTranslationListRelationFilter;
  size?: FloatNullableFilter;
};
