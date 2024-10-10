import React, { forwardRef, useRef, useState } from "react";
import Input from "./components/Input";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale/es";
import { objConf } from "./objConf";
registerLocale("es", es);

const CustomInput = forwardRef((props: any, ref) => {
  return <Input {...props} ref={ref} />;
});

export const CustomTimePicker = () => {
  const { formatHour } = objConf;
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div>
      {JSON.stringify(startDate)}- {formatHour}
      {formatHour === "12" ? (
        <DatePicker
          locale="es"
          selected={startDate}
          showTimeInput
          timeInputLabel="Hora"
          timeFormat={"h:mm aa"}
          onChange={(date: Date | null) => setStartDate(date)}
        />
      ) : (
        <DatePicker
          locale="es"
          selected={startDate}
          showTimeInput
          timeInputLabel="Hora"
          customTimeInput={<CustomInput />}
          timeFormat={"HH:mm"}
          onChange={(date: Date | null) => setStartDate(date)}
        />
      )}
      {/* <pre>{JSON.stringify(objConf, null, 2)}</pre> */}
    </div>
  );
};
