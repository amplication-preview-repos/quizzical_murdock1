import { JsonValue } from "type-fest";
import { Property } from "../property/Property";

export type ImageCustomField = {
  createdAt: Date;
  id: string;
  image: JsonValue;
  property?: Property | null;
  updatedAt: Date;
};
