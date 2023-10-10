// import { Link } from 'react-router-dom';
import moment from 'moment';
// import DayCalendarHead from '../ChoosedDay/DayCalendarHead'; // Импортируем компонент
import sprite from 'images/icons.svg';

import {
    Date,
    DateBox,
    PeriodPaginator,
    PeriodTypeSelect,
    Icon,
    ToolbarContainer,
    // TypeLink,
    BtnRight,
    BtnLeft,
    BtnMonth,
    BtnDay,
} from './CalendarToolbar.styled';
import { useEffect } from 'react';

const CalendarToolbar = ({
    currentDate,
    setCurrentDate,
    format,
    setFormat,
}) => {
    // const month = moment(currentDate).format('YYYY-MM');
    // const day = moment(currentDate).format('YYYY-MM-DD');

    const handlePrevDate = format => {
        const date = moment(currentDate)
            .subtract(1, format)
            .format('YYYY-MM-DD');
        setCurrentDate(date);
        localStorage.setItem('date', date);
    };

    const handleNextDate = format => {
        const date = moment(currentDate).add(1, format).format('YYYY-MM-DD');
        setCurrentDate(date);
        localStorage.setItem('date', date);
    };

    const handleChangePeriod = evt => {
        switch (evt.currentTarget.textContent) {
            case 'Month':
                setFormat('month');
                localStorage.setItem('type', 'month');
                break;
            case 'Day':
                setFormat('day');
                localStorage.setItem('type', 'day');
                break;
            default:
                return format;
        }
    };

    // useEffect(() => {
    //     setFormat(localStorage.getItem('type') || 'month');
    //     setCurrentDate(
    //         localStorage.getItem('date') ||
    //             moment().format('YYYY-MM-DD').toString()
    //     );
    // });

    return (
        <ToolbarContainer>
            <PeriodTypeSelect>
                <DateBox>
                    <Date>
                        {moment(currentDate).format(
                            format === 'day' ? 'DD MMM YYYY' : 'MMMM YYYY'
                        )}
                    </Date>
                </DateBox>
                <div>
                    <BtnLeft
                        type="button"
                        onClick={() => handlePrevDate(format)}
                    >
                        <Icon width="18" height="18">
                            <use href={`${sprite}#chevron-left`} />
                        </Icon>
                    </BtnLeft>
                    <BtnRight
                        type="button"
                        onClick={() => handleNextDate(format)}
                    >
                        <Icon width="18" height="18">
                            <use href={`${sprite}#chevron-right`} />
                        </Icon>
                    </BtnRight>
                </div>
            </PeriodTypeSelect>
            <PeriodPaginator>
                <BtnMonth
                    type="button"
                    onClick={handleChangePeriod}
                    className={format === 'month' ? 'active' : ''}
                >
                    Month
                </BtnMonth>
                <BtnDay
                    type="button"
                    onClick={handleChangePeriod}
                    className={format === 'day' ? 'active' : ''}
                >
                    Day
                </BtnDay>
            </PeriodPaginator>
        </ToolbarContainer>
    );
};

export default CalendarToolbar;
