import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  id?: SortOrder;
  serviceType?: SortOrder;
  updatedAt?: SortOrder;
};
