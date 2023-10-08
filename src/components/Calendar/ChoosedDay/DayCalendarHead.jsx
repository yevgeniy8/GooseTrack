import { WeekdaysItem, WeekdaysList } from './DayCalendarHead.styled';
import { useMediaQuery } from 'react-responsive';
import { DAYS, DAYS_MOB } from '../ChoosedMonth/utils';
const DayCalendarHead = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const currentDate = new Date();

  const displayedDays = isMobile ? DAYS_MOB.slice(0, 7) : DAYS;

  return (
    <WeekdaysList>
      {displayedDays.map((day, index) => (
        <WeekdaysItem key={index} className={currentDate.getDay() === index ? 'current-day' : ''}>
          {day} {currentDate.getDate() + index}
        </WeekdaysItem>
      ))}
    </WeekdaysList>
  );
};

export default DayCalendarHead;
