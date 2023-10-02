import { useState } from "react";
import { DatepickerWrap,DatePickerStyled, DatePickWrapper } from "./ReactDatePickerCalendar.styled"




  


export const BirthdayDatePicker=()=>{
    const [startDate, setStartDate] = useState(new Date());

    return <DatePickWrapper>
        <DatePickerStyled selected={startDate} onChange={(date) => setStartDate(date)}  />
    </DatePickWrapper>
}