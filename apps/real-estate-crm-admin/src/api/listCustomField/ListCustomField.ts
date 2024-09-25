import { Property } from "../property/Property";

export type ListCustomField = {
  createdAt: Date;
  id: string;
  label: string | null;
  property?: Property | null;
  updatedAt: Date;
};
