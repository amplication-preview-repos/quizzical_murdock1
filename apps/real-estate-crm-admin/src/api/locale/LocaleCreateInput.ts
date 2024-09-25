import { PropertyTranslationCreateNestedManyWithoutLocalesInput } from "./PropertyTranslationCreateNestedManyWithoutLocalesInput";

export type LocaleCreateInput = {
  name?: string | null;
  propertyTranslations?: PropertyTranslationCreateNestedManyWithoutLocalesInput;
};
