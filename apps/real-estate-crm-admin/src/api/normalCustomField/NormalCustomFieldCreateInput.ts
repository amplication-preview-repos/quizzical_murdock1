import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type NormalCustomFieldCreateInput = {
  content?: string | null;
  label?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
