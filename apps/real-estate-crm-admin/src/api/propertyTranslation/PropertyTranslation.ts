import { Locale } from "../locale/Locale";
import { Property } from "../property/Property";

export type PropertyTranslation = {
  createdAt: Date;
  description: string | null;
  id: string;
  locale?: Locale | null;
  property?: Property | null;
  updatedAt: Date;
};
