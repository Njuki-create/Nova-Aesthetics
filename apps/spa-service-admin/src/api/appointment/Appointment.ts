import { Client } from "../client/Client";

export type Appointment = {
  client?: Client | null;
  createdAt: Date;
  dateTime: Date | null;
  id: string;
  serviceType: string | null;
  updatedAt: Date;
};
