import React, { forwardRef, useEffect, useState } from "react";
import { useDebounce } from "./CustomTimePicker/useDebounce";

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

  const [time, setTime] = useState(value)
  //const [validateTime, setValidateTime] = useState('')
  const debouncedSearch = useDebounce(time)

  useEffect(()=> {
    const saveTime = async () => {
      validation(debouncedSearch)        
    }
    saveTime();
  },[debouncedSearch])

  
  const validateTime24Hours = (hour) => {
    // Expresión regular para validar el formato HH:MM en formato 24 horas
    const regexHora24 = /^([01]\d|2[0-3]):([0-5]\d)$/;
    // Retorna true si la hora cumple con el formato, false en caso contrario
    return regexHora24.test(hour);
}

const actualizarHora = (fechaOriginal, nuevaHora) => {
  // Descomponemos la nueva hora en horas y minutos
  const [horas, minutos] = nuevaHora.split(':').map(Number);

  // Crear una nueva instancia de la fecha original para no modificarla directamente
  const fechaActualizada = new Date(fechaOriginal);

  // Actualizamos las horas y los minutos
  fechaActualizada.setHours(horas);
  fechaActualizada.setMinutes(minutos);
  fechaActualizada.setSeconds(0); // Opcional: Reiniciar los segundos a 0 si lo deseas

  return fechaActualizada;
}

const convertirAHoraUTC = (fechaLocal) => {
  // Obtenemos las horas, minutos y segundos en formato UTC
  const horasUTC = fechaLocal.getUTCHours();
  const minutosUTC = fechaLocal.getUTCMinutes();
  const segundosUTC = fechaLocal.getUTCSeconds();

  // Formateamos la hora UTC en "HH:MM:SS"
  const horaUTC = `${horasUTC.toString().padStart(2, '0')}:${minutosUTC.toString().padStart(2, '0')}:${segundosUTC.toString().padStart(2, '0')}`;

  return horaUTC;
}

  const validation = (hour) => {
    if(!hour) return
      console.log('--- validation ', hour);
      if(validateTime24Hours(hour)) {
        setTime(hour)                
        //const fechaActualizada = actualizarHora(date, hour)
        //console.log("fechaActualizada", fechaActualizada)
        //const horaUTC = convertirAHoraUTC(fechaActualizada);
        //console.log("Hora en formato UTC:", horaUTC);

        //setStartDate(fechaActualizada)
        onChange(hour)
        //setValidateTime("")
        //startRef.current?.setOpen(false); 
        //onChange(hour)
      } else {
        //setValidateTime("Hora incorrecta")
      }
      //setTime(e.target.value)      
      //e.target?.focus()
  }

  return (
    <input
      className={className}
      type="text"
      value={time}
      ref={ref}
      onChange={(e) => setTime(e.target.value)}
      onClick={onClick}
    />
  );
};

export default forwardRef(Input);
