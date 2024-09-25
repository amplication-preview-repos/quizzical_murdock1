import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocaleWhereUniqueInput } from "../locale/LocaleWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type PropertyTranslationWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  locale?: LocaleWhereUniqueInput;
  property?: PropertyWhereUniqueInput;
};
