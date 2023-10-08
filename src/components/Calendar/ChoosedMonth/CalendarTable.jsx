import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';
// import styled from '@emotion/styled';

import { datesAreOnSameDay, getDaysInMonth, getSortedDays } from './utils';
import { Table } from './ChoosedMonth.styled';
import { useNavigate, useParams } from 'react-router';

import TaskList from './TaskList';
import { NavLink } from 'react-router-dom';

const CalendarTable = () => {
    const { currentDate } = useParams();
    const navigate = useNavigate();

    const date = new Date(currentDate);

    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleNavToDay = date => {
        navigate(`day/${date}`);
        console.log(date);
  };

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
                            <NavLink onClick={() => handleNavToDay(date)}>{day}</NavLink>                             
                        </span>
                                <TaskList
                                    currentDate={currentDate}
                                    day={day}
                                    tasks={tasks}
                                />
                        {/* <List>
                        <Task>Low, very low priority</Task>
                        <Task>Medium, medium priority</Task>
                        <Task>High, very high priority</Task>
                        </List> */}
                    </div>
                ))}
            </Table>
        </>
    );
};

export default CalendarTable;

// const Task = styled.li`
//     padding: 4 8px;
//     border-radius: 8px;
//     margin-bottom: 8px;
//     max-width: 100%;
//     color: #3E85F3;
//     background-color: #CEEEFD;
//     // background-color: ${props => props.bg};
//     // color: ${props => props.color};
//     font-family: Inter;
//     font-size: 10px;
//     font-weight: 700;
//     line-height: 14px;
//     letter-spacing: 0em;
//     text-align: left;
//     white-space: nowrap; /* Текст не переносится */
//     overflow: hidden; /* Обрезаем всё за пределами блока */
//     text-overflow: ellipsis; /* Добавляем многоточие */
//      @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
//         font-size: 14px;
//         line-height: 18px;
//   };
//     `

// const List = styled.ul`
//     list-style: none;
//     height: 65px;
//     max-width: 44px;
//     padding: 0 2px;
//     margin: 0;
//     overflow-y: auto;
//      @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
//         max-width: 100%;
//         padding: 0 4px; };
//     `

//     // color={`color${task.priority}`}
//     // bg={`bgcolor{task.priority}`}


//     export const priorityColors = {
//     colorLow: '#3E85F3',
//     bgColorLow: '#CEEEFD',
//     colorMedium: '#F3B249',
//     bgColorMedium: '#FCF0D4',
//     colorHgh: '#EA3D65',
//     bgColorHigh: '#FFD2DD',
// }