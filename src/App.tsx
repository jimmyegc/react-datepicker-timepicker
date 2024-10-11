//import { RHFDatepicker } from "./components/RHFDatepicker/RHFDatepicker";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  //const now = new Date()

  const formatUTC = (dateInt, addOffset = false) => {
    const date =
      !dateInt || dateInt.length < 1 ? new Date() : new Date(dateInt);
    if (typeof dateInt === "string") {
      return date;
    } else {
      const offset = addOffset
        ? date.getTimezoneOffset()
        : -date.getTimezoneOffset();
      const offsetDate = new Date();
      offsetDate.setTime(date.getTime() + offset * 60000);
      return offsetDate;
    }
  };

  const handleChange = (selectedDate: Date) => {    
    const myDate = formatUTC(selectedDate)
    console.log("Normal selectedDate", selectedDate);
    console.log("selectedDate UTC", formatUTC(selectedDate));
    console.log("new Date toISOString", myDate.toISOString());
    console.log("new Date toLocaleString", myDate.toLocaleString());

    setStartDate(selectedDate)
    console.log("selectedDate DatePicker", selectedDate)
    console.log("formatUTC", myDate)
    //localStorage.setItem("myDate", myDate.toISOString());
    localStorage.setItem("myDate", selectedDate);
  }

  useEffect(() => {
    const initialDate = localStorage.getItem("myDate")    
    const myDate = new Date(initialDate)    
    setStartDate(myDate)
  },[])
  
  return (<div>  
    <h1>Datepicker</h1>        
      UTC: toISOString
      <pre>{JSON.stringify(startDate.toISOString())}</pre>      
      Local: toLocaleString
      <pre>
      {JSON.stringify(startDate.toLocaleString())}</pre>      
      Timestamp: now()
      <pre>
      {JSON.stringify(Date.now())}
      </pre>
      <DatePicker 
        showIcon
        isClearable
        selected={startDate} 
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
        /* onSelect={()=> alert('sel')} */
        onSelect={handleChange}
        onChange={handleChange} 
      />


      {/* <RHFDatepicker/> */}
  </div>)
}

export default App;
