import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  dateTime?: Date | null;
  serviceType?: string | null;
};
