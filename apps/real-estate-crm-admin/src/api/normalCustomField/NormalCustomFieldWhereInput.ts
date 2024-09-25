import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type NormalCustomFieldWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
};
