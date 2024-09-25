import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ListCustomFieldWhereInput = {
  id?: StringFilter;
  label?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
};
