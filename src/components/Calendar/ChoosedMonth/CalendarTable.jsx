import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/tasksOperations';
// import { selectCalendar } from 'redux/tasks/tasksSelector';
import {
    datesAreOnSameDay,
    getDaysInMonth,
    getSortedDays,
    getMonthYear,
    nextMonth,
    prevMonth,
} from './utils';
import {
    BtnLeft,
    Period,
    BtnRight,
    Paginator,
    Svg,
} from '../CalendarToolbar/CalendarToolbar.styled';
import { Table } from './ChoosedMonth.styled';
import sprite from 'images/icons.svg';

const CalendarTable = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const dispatch = useDispatch();
    // const currentDate = useSelector(selectCalendar);
    const tasks = dispatch(fetchTasks());
    console.log(tasks);
    const handlePrevMonth = () => prevMonth(currentDate, setCurrentDate);
    const handleNextMonth = () => nextMonth(currentDate, setCurrentDate);

    return (
        <>
            <Paginator>
                <Period type="button">{getMonthYear(currentDate)}</Period>
                <div>
                    <BtnLeft type="button" onClick={handlePrevMonth}>
                        <Svg width="18" height="18">
                            <use href={`${sprite}#chevron-left`} />
                        </Svg>
                    </BtnLeft>
                    <BtnRight type="button" onClick={handleNextMonth}>
                        <Svg width="18" height="18">
                            <use href={`${sprite}#chevron-right`} />
                        </Svg>
                    </BtnRight>
                </div>
            </Paginator>
            <Table
                fullheight={true}
                is28Days={getDaysInMonth(currentDate) === 28}
            >
                {getSortedDays(currentDate).map((day, index) => (
                    <div
                        key={index}
                        id={`${currentDate.getFullYear()}.${
                            currentDate.getMonth() + 1
                        }.${day}`}
                    >
                        <span
                            className={`nonDRAG ${
                                datesAreOnSameDay(
                                    new Date(),
                                    new Date(
                                        currentDate.getFullYear(),
                                        currentDate.getMonth(),
                                        day
                                    )
                                )
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            {day}
                        </span>
                    </div>
                ))}
            </Table>
        </>
    );
};

export default CalendarTable;
