import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';

import { datesAreOnSameDay, getDaysInMonth, getSortedDays } from './utils';
import { Table } from './ChoosedMonth.styled';
import { useParams } from 'react-router';

import TaskList from './TaskList';

const CalendarTable = () => {
    const { currentDate } = useParams();
    // console.log(currentDate); //2023-10

    const date = new Date(currentDate);

    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    // необходимо что бы убрать Warning
    console.log(tasks);
    
    return (
        <>
            <Table fullheight={true} is28Days={getDaysInMonth(date) === 28}>
                {getSortedDays(date).map((day, index) => (
                    <div
                        key={index}
                        id={`${date.getFullYear()}-${
                            date.getMonth() + 1
                        }-${day}`}
                    >
                        <span
                            className={`nonDRAG ${
                                datesAreOnSameDay(new Date(),
                                    new Date(date.getFullYear(),
                                        date.getMonth(),
                                        day))? 'active':''}`}
                        >
                            {day}
                        </span>
                    <TaskList currentDate={date} tasks={tasks} />
                    </div>
                ))}
            </Table>
        </>
    );
};

export default CalendarTable;


