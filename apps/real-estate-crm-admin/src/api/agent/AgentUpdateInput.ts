import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
