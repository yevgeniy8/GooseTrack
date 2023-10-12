import {
    WeekdaysItem,
    WeekdaysList,
    Number,
    Day,
} from './DayCalendarHead.styled';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useParams } from 'react-router-dom';

import moment from 'moment';

import { useEffect, useState } from 'react';

const DayCalendarHead = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const navigate = useNavigate();

    const [isSelected, setIsSelected] = useState('');

    const { currentDay } = useParams();

    useEffect(() => {
        moment.updateLocale('en', { week: { dow: 1 } });

        [...Array(7)].map((_, idx) => {
            const curr = moment(currentDay)
                .clone()
                .startOf('week')
                .day(idx + 1)
                .format('DD');

            if (curr === currentDay.split('-')[2]) {
                setIsSelected(idx);
            }
            return null;
        });
    }, [currentDay]);

    const handleClick = date => {
        const dateFormat = date.format('YYYY-MM-DD');
        localStorage.setItem('date', dateFormat);
        navigate(`/calendar/day/${dateFormat}`);
    };

    return (
        <WeekdaysList>
            {[...Array(7)].map((_, index) => (
                <WeekdaysItem
                    key={index}
                    onClick={() =>
                        handleClick(
                            moment(currentDay)
                                .clone()
                                .startOf('week')
                                .day(index + 1)
                        )
                    }
                >
                    <Day>
                        {isMobile
                            ? moment()
                                  .day(index + 1)
                                  .format('ddd')[0]
                            : moment()
                                  .day(index + 1)
                                  .format('ddd')}
                    </Day>
                    <Number
                        className={index === isSelected ? 'current-day' : ''}
                    >
                        {moment(currentDay)
                            .clone()
                            .startOf('week')
                            .day(index + 1)
                            .format('D')}
                    </Number>
                </WeekdaysItem>
            ))}
        </WeekdaysList>
    );
};

export default DayCalendarHead;
