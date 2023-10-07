import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';


import {
    datesAreOnSameDay,
    getDaysInMonth,
    getSortedDays,
} from './utils';
import { Table } from './ChoosedMonth.styled';
// import { useParams } from 'react-router';

const CalendarTable = () => {
    // const { currentDate } = useParams();
    // console.log(currentDate); //2023-10

    const [currentDate] = useState(new Date());
    console.log(currentDate); //Sat Oct 07 2023 13:03:40 
    
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
