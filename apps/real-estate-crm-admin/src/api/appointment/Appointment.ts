import { Agent } from "../agent/Agent";
import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  agent?: Agent | null;
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  notes: string | null;
  property?: Property | null;
  updatedAt: Date;
};
