import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ImageCustomFieldWhereInput = {
  id?: StringFilter;
  image?: JsonFilter;
  property?: PropertyWhereUniqueInput;
};
