import { WeekdaysItem, WeekdaysList } from "./ChoosedMonth.styled";

import { DAYS } from './utils';

const CalendarHead
 = () => {
     return ( 
         
         <WeekdaysList>
             {DAYS.map((day) => (
          <WeekdaysItem >{day}</WeekdaysItem>
        ))}
             </WeekdaysList>
        
     );
}
 
export default CalendarHead;