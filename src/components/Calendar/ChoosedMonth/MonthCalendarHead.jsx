import { useMediaQuery } from 'react-responsive';
import { WeekdaysItem, WeekdaysList } from './MonthCalendarHead.styled';

import { DAYS, DAYS_MOB } from './utils';

const MonthCalendarHead = () => {
    
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <WeekdaysList>
            {isMobile?DAYS_MOB.map((day, index) => (
                <WeekdaysItem key={index}>{day}</WeekdaysItem>
            )):DAYS.map((day, index) => (
                <WeekdaysItem key={index}>{day}</WeekdaysItem>
            ))}
        </WeekdaysList>
    );
};

export default MonthCalendarHead;
