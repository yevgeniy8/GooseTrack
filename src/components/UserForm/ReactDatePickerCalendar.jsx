// import React, { useState } from 'react';
import {
    DatePickerStyled,
    DatePickWrapper,
} from './ReactDatePickerCalendar.styled';

export const BirthdayDatePicker = ({value, onChange}) => {
    // const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePickWrapper>
            <DatePickerStyled
                selected={value}
                onChange={onChange}
                value={value||new Date()}
                formatWeekDay={nameOfDay => nameOfDay.charAt(0)}
            />
        </DatePickWrapper>
    );
};
