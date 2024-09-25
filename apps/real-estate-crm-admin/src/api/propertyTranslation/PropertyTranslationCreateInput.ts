import { LocaleWhereUniqueInput } from "../locale/LocaleWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type PropertyTranslationCreateInput = {
  description?: string | null;
  locale?: LocaleWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
