import {
    WeekdaysItem,
    WeekdaysList,
    Number,
    Day,
} from './DayCalendarHead.styled';
import { useMediaQuery } from 'react-responsive';
// import { DAYS, DAYS_MOB } from '../ChoosedMonth/utils';
import { useParams } from 'react-router-dom';

import moment from 'moment';

import { useEffect, useState } from 'react';

const DayCalendarHead = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

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

    return (
        <WeekdaysList>
            {[...Array(7)].map((_, index) => (
                <WeekdaysItem
                    key={index}
                    // className={index === isSelected ? 'current-day' : ''}
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
