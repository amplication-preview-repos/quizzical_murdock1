import { LocaleWhereUniqueInput } from "../locale/LocaleWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type PropertyTranslationUpdateInput = {
  description?: string | null;
  locale?: LocaleWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
