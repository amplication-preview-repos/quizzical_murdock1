import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyTranslationListRelationFilter } from "../propertyTranslation/PropertyTranslationListRelationFilter";

export type LocaleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  propertyTranslations?: PropertyTranslationListRelationFilter;
};
