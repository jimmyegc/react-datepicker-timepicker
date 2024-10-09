import React, { forwardRef, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDebounce } from './useDebounce'
import FormControl from 'react-bootstrap/FormControl'
import './App.css'

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      type='text'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search users'
    />
  );
}

function App() {
  
  const [startDate, setStartDate] = useState(new Date());
  const startRef = useRef<DatePicker>();


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

  const ExampleCustomTimeInput = ({ date, value, onChange }) => {    
    const [time, setTime] = useState('')
    const [validateTime, setValidateTime] = useState('')
    const debouncedSearch = useDebounce(time)

    useEffect(()=> {
      const saveTime = async () => {
        validation(debouncedSearch)        
      }
      saveTime();
    },[debouncedSearch])

    const validation = (hour: any) => {      
      
      if(!hour) return
      console.log('--- validation ', hour);
      if(validateTime24Hours(hour)) {
        setTime(hour)                
        const fechaActualizada = actualizarHora(startDate, hour)
        console.log("fechaActualizada", fechaActualizada)
        const horaUTC = convertirAHoraUTC(fechaActualizada);
        console.log("Hora en formato UTC:", horaUTC);

        setStartDate(fechaActualizada)
        //onChange(fechaActualizada)
        setValidateTime("")
        startRef.current?.setOpen(false); 
        //onChange(hour)
      } else {
        setValidateTime("Hora incorrecta")
      }
      //setTime(e.target.value)      
      //e.target?.focus()
    }

    return (<>
      <SearchBar value={time} onChange={setTime} />
      <input
         value={debouncedSearch}/*
        onChange={(e) => onChange(e.target.value)} */
        onChange={(e) => setTime(e.target.value)}            
        onClick={(e) => e.target?.focus()}
        style={{ border: "solid 1px pink" }}
      />
      {validateTime && (
        <p>{validateTime}</p>
      )}
    </>)
  };

  const handleChange = (e) => {    
    console.log(e)
  }

  return (
   <div>    
      <span>{JSON.stringify(startDate)}
      </span>
      <DatePicker
        ref={startRef}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        /* onChange={handleChange} */
        dateFormat={"MM/dd/yyyy HH:mm"}
        showTimeInput
        customTimeInput={<ExampleCustomTimeInput />}
    />

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeInput
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    
   </div>
  );
}

export default App
