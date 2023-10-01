import { WeekdaysItem, WeekdaysList } from "./ChoosedMonth.styled";

const CalendarHead
 = () => {
     return ( 
         <>
             <WeekdaysList>
                 <WeekdaysItem>mon</WeekdaysItem>
                 <WeekdaysItem>tue</WeekdaysItem>
                 <WeekdaysItem>wed</WeekdaysItem>
                 <WeekdaysItem>thu</WeekdaysItem>
                 <WeekdaysItem>fri</WeekdaysItem>
                 <WeekdaysItem>sat</WeekdaysItem>
                 <WeekdaysItem>sun</WeekdaysItem>
             </WeekdaysList>
        </>
     );
}
 
export default CalendarHead;