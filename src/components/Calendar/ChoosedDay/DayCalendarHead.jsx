// DayCalendarHead.jsx
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { WeekdaysItem, WeekdaysList } from './DayCalendarHead.styled';
import { useMediaQuery } from 'react-responsive';
import { DAYS, DAYS_MOB } from '../ChoosedMonth/utils';

const DayCalendarHead = ({ currentDate, handlePrevDate, handleNextDate }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [displayedDays, setDisplayedDays] = useState(isMobile ? DAYS_MOB : DAYS);

  useEffect(() => {
    setDisplayedDays(isMobile ? DAYS_MOB : DAYS);
  }, [isMobile]);

  useEffect(() => {
    // Обновляем displayedDays при изменении currentDate
    setDisplayedDays(isMobile ? DAYS_MOB : DAYS);
  }, [currentDate, isMobile]);

  return (
    <WeekdaysList>
      {displayedDays.map((day, index) => (
        <WeekdaysItem
          key={index}
          className={
            moment(currentDate).day(index).format('YYYY-MM-DD') === currentDate ? 'current-day' : ''
          }
          onClick={() => {
            const date = moment(currentDate).day(index).format('YYYY-MM-DD');
            if (moment(date).isValid()) {
              handlePrevDate(date);
            }
          }}
        >
          {day} {moment(currentDate).day(index).format('DD')}
        </WeekdaysItem>
      ))}
    </WeekdaysList>
  );
};

export default DayCalendarHead;
