import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentWhereInput = {
  client?: ClientWhereUniqueInput;
  dateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  serviceType?: StringNullableFilter;
};
