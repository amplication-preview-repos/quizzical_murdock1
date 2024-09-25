import { InputJsonValue } from "../../types";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ImageCustomFieldCreateInput = {
  image?: InputJsonValue;
  property?: PropertyWhereUniqueInput | null;
};
