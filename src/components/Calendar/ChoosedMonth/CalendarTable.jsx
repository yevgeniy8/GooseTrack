import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';


import {
    datesAreOnSameDay,
    getDaysInMonth,
    getSortedDays,
    // getMonthYear,
    // nextMonth,
    // prevMonth,
} from './utils';
import { Table } from './ChoosedMonth.styled';

const CalendarTable = () => {
    const [currentDate] = useState(new Date());
    // const currentDate = useSelector(selectCalendar);

    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    // необходимо что бы убрать Warning
    console.log(tasks);

    // const handlePrevMonth = () => prevMonth(currentDate, setCurrentDate);
    // const handleNextMonth = () => nextMonth(currentDate, setCurrentDate);

    return (
        <>
            <Table
                fullheight={true}
                is28Days={getDaysInMonth(currentDate) === 28}
            >
                {getSortedDays(currentDate).map((day, index) => (
                    <div
                        key={index}
                        id={`${currentDate.getFullYear()}-${
                            currentDate.getMonth() + 1
                        }-${day}`}
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
