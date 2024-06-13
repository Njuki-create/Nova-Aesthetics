import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "serviceType";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.serviceType?.toString() || String(record.id);
};
