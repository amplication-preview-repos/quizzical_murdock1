import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ListCustomFieldCreateInput = {
  label?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
