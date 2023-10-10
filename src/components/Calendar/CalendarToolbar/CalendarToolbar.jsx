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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CalendarToolbar = () => {
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState(
        localStorage.getItem('date') || moment().format('YYYY-MM-DD').toString()
    );
    const [format, setFormat] = useState(
        localStorage.getItem('type') || 'month'
    );

    useEffect(() => {
        let date;
        setFormat(localStorage.getItem('type') || 'month');
        setCurrentDate(
            localStorage.getItem('date') ||
                moment().format('YYYY-MM-DD').toString()
        );

        switch (format) {
            case 'month':
                date = moment(currentDate).format('YYYY-MM');
                navigate(`/calendar/month/${date}`);
                break;
            case 'day':
                date = moment(currentDate).format('YYYY-MM-DD');
                navigate(`/calendar/day/${date}`);
                break;
            default:
                return;
        }
    }, [currentDate, format, navigate]);

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
