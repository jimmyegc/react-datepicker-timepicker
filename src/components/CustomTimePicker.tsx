import React, { forwardRef, useRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Input from './Input';

const CustomInput = forwardRef((props: any, ref) => {
  return <Input {...props} ref={ref} />;
});

export const CustomTimePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const inputRef = useRef(null);
  return (
    <div>
      <h1>React datepicker</h1>
      {JSON.stringify(startDate)}
      <DatePicker
        selected={startDate}
        showTimeInput
        customTimeInput={<CustomInput inputRef={inputRef} />}
        onChange={(date: Date | null) => setStartDate(date)}
      />
    </div>
  );
}
