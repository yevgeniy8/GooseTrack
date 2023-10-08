import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';
import styled from '@emotion/styled';

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
                        <TaskList
                            currentDate={currentDate}
                            day={day}
                            tasks={tasks}
                        />
                        <Task>Low, very low priority</Task>
                        <Task>Medium, medium priority</Task>
                        <Task>High, very high priority</Task>
                    </div>
                ))}
            </Table>
        </>
    );
};

export default CalendarTable;

const Task = styled.p`
    padding: 0 8px;;
    border-radius: 8px;
    color: '#3E85F3';
    background-color: '#CEEEFD';
    white-space: nowrap; /* Текст не переносится */
    overflow: hidden; /* Обрезаем всё за пределами блока */
    text-overflow: ellipsis; /* Добавляем многоточие */`