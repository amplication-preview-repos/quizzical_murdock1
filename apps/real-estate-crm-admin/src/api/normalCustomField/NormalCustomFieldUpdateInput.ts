import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type NormalCustomFieldUpdateInput = {
  content?: string | null;
  label?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
