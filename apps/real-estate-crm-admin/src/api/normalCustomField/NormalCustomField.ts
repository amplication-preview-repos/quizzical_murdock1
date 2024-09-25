import { Property } from "../property/Property";

export type NormalCustomField = {
  content: string | null;
  createdAt: Date;
  id: string;
  label: string | null;
  property?: Property | null;
  updatedAt: Date;
};
