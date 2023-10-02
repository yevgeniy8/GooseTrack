import { useState } from "react";
import { DatepickerWrap,DatePickerStyled, DatePickWrapper } from "./ReactDatePickerCalendar.styled"
import { format } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import en from 'date-fns/locale/en-US';

// daysOfWeek: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
const customDayNames = {
    localize: {
        
              day: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            },
    
  };
  
  // Спеціфікуємо локалізацію та додаємо об'єкт localize
//   const customLocale = {
//     ...en, // Використовуємо локалізацію української мови як базову
//     localize: {
//       ...en.localize,
//       day: customDayNames.daysOfWeek,
//     },
//   };

//   registerLocale('custom', customLocale);
// setDefaultLocale('custom');
//   const customDayNames = {
//     daysOfWeek: [
//       format(new Date(2023, 0, 1), 'EEEEEE'), // Понеділок
//       format(new Date(2023, 0, 2), 'EEEEEE'), // Вівторок
//       format(new Date(2023, 0, 3), 'EEEEEE'), // Середа
//       format(new Date(2023, 0, 4), 'EEEEEE'), // Четвер
//       format(new Date(2023, 0, 5), 'EEEEEE'), // П'ятниця
//       format(new Date(2023, 0, 6), 'EEEEEE'), // Субота
//       format(new Date(2023, 0, 7), 'EEEEEE'), // Неділя
//     ],
//   };

export const BirthdayDatePicker=()=>{
    const [startDate, setStartDate] = useState(new Date());

    return <DatePickWrapper>
        <DatePickerStyled selected={startDate} onChange={(date) => setStartDate(date)} locale={customDayNames} />
    </DatePickWrapper>
}