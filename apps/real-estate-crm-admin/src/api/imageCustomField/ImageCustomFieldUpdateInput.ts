import { InputJsonValue } from "../../types";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ImageCustomFieldUpdateInput = {
  image?: InputJsonValue;
  property?: PropertyWhereUniqueInput | null;
};
