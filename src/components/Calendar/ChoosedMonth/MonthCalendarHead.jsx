import { WeekdaysItem, WeekdaysList } from "./ChoosedMonth.styled";
// import { nanoid } from 'nanoid'

import { DAYS } from './utils';

const CalendarHead = () => {
    // const dayKey = nanoid();
     return ( 
         <WeekdaysList>
             {DAYS.map((day) => (
          <WeekdaysItem>{day}</WeekdaysItem>
        ))}
             </WeekdaysList>
        
     );
}
 
export default CalendarHead;