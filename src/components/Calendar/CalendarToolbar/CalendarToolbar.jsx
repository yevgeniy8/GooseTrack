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
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CalendarToolbar = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [format, setFormat] = useState('');

    const month = moment(currentDate).format('YYYY-MM');
    const day = moment(currentDate).format('YYYY-MM-DD');

    const navigate = useNavigate();

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

    useEffect(() => {
        const storedDate = localStorage.getItem('date');
        const storedType = localStorage.getItem('type');

        if (storedDate) {
            setCurrentDate(storedDate);
        } else {
            setCurrentDate(moment().format('YYYY-MM-DD'));
        }

        if (storedType) {
            setFormat(storedType);
        } else {
            setFormat('month');
        }
    }, []);

    const handleChangeType = e => {
        switch (e.currentTarget.textContent) {
            case 'Month':
                setFormat('month');
                localStorage.setItem('type', 'month');
                navigate(`month/${month}`);
                break;
            case 'Day':
                setFormat('day');
                localStorage.setItem('type', 'day');
                navigate(`day/${day}`);
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
                    onClick={handleChangeType}
                    className={format === 'month' ? 'active' : ''}
                >
                    Month
                </BtnMonth>
                <BtnDay
                    type="button"
                    onClick={handleChangeType}
                    className={format === 'day' ? 'active' : ''}
                >
                    Day
                </BtnDay>
            </PeriodPaginator>
        </ToolbarContainer>
    );
};

export default CalendarToolbar;
