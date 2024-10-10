import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useDebounce } from "../useDebounce";
import { useCustomTime } from "../useCustomTime";

interface InputProps {
  className: string;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}
const Input: React.FC<InputProps> = (
  { className, value, onClick, onChange },
  ref
) => {
  const { validateTime24Hours } = useCustomTime();
  const [time, setTime] = useState(value);
  const [validateTime, setValidateTime] = useState("");
  const debouncedSearch = useDebounce(time);

  useEffect(() => {
    const save = async () => {
      validate(debouncedSearch);
    };
    save();
  }, [debouncedSearch]);

  const validate = (hour) => {
    if (!hour) return;
    // console.log("validation", hour);
    if (validateTime24Hours(hour)) {
      setTime(hour);
      //const fechaActualizada = actualizarHora(date, hour)
      //console.log("fechaActualizada", fechaActualizada)
      //const horaUTC = convertirAHoraUTC(fechaActualizada);
      //console.log("Hora en formato UTC:", horaUTC);
      //setStartDate(fechaActualizada)
      onChange(hour);
      setValidateTime("")
      //onChange(hour)
    } else {
      setValidateTime("Hora incorrecta");
    }
    //setTime(e.target.value)
    //e.target?.focus()
  };

  return (
    <>
      <input
        className={className}
        type="text"
        value={time}
        ref={ref}
        onChange={(e) => setTime(e.target.value)}
        onClick={onClick}
      />
      {validateTime && <p>{validateTime}</p>}
    </>
  );
};

export default forwardRef(Input);
