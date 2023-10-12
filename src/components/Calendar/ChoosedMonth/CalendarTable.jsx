import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';

import { datesAreOnSameDay, getDaysInMonth, getSortedDays } from './utils';
import { Table } from './ChoosedMonth.styled';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

import TaskList from './TaskList';
import { NavLink } from 'react-router-dom';

const CalendarTable = () => {
    const { currentDate } = useParams();
    const navigate = useNavigate();

    const date = new Date(currentDate);

    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    useEffect(() => {
        dispatch(fetchTasks(currentDate));
    }, [currentDate, dispatch]);

    const handleClick = day => {
        if (day < 10) {
            day = `${0}${day}`;
            console.log(day);
        };

        localStorage.setItem('type', 'day');
        localStorage.setItem('date', currentDate + '-' + day);
        navigate(`/day/${currentDate + '-' + day}`);
    };

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
                        <NavLink
                            onClick={() => handleClick(day)}
                        >
                            <span
                                className={`nonDRAG ${
                                    datesAreOnSameDay(
                                        new Date(),
                                        new Date(
                                            date.getFullYear(),
                                            date.getMonth(),
                                            day
                                        )
                                    )
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                {day}
                            </span>
                        </NavLink>
                        <TaskList
                            currentDate={currentDate}
                            day={day}
                            tasks={tasks}
                        />
                    </div>
                ))}
            </Table>
        </>
    );
};

export default CalendarTable;
