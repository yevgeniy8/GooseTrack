import React, { useState } from 'react';
import {

    DatePickerStyled,
    DatePickWrapper,
} from './ReactDatePickerCalendar.styled';



export const BirthdayDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePickWrapper>
            <DatePickerStyled
                selected={startDate}
                onChange={date => setStartDate(date)}
                formatWeekDay={nameOfDay => nameOfDay.charAt(0)} 
                
            />
        </DatePickWrapper>
    );
};
