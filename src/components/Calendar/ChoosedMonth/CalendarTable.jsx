import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';
// import styled from '@emotion/styled';

import { datesAreOnSameDay, getDaysInMonth, getSortedDays } from './utils';
import { Table } from './ChoosedMonth.styled';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

import { TaskModal } from '../../TaskModal/TaskModal';
import TaskList from './TaskList';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const CalendarTable = () => {
    const { currentDate } = useParams();
    const navigate = useNavigate();

    const date = new Date(currentDate);

    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    useEffect(() => {
        dispatch(fetchTasks(currentDate));
    }, [currentDate, dispatch]);

    // const handleNavToDay = selectedDate => {
    //     // const day = moment(selectedDate).format('YYYY-MM-DD');
    //     // localStorage.getItem('day');
    //     // // localStorage.setItem('type', 'day');
    //     // localStorage.setItem('date', day);
    //     navigate(`/calendar/day/${selectedDate}`);
    //     // console.log(selectedDate); // Sun Oct 01 2023
    //     // console.log(day); // 2023-10-01
    // };

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
    };

    const handleClick = day => {
        if (day < 10) {
            day = `${0}${day}`;
            console.log(day);
        }

        localStorage.setItem('type', 'day');
        localStorage.setItem('date', currentDate + '-' + day);
        navigate(`/calendar/day/${currentDate + '-' + day}`);
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
                        <div
                            onClick={() => handleClick(day)}
                            // to={`/calendar/day/${currentDate + '-' + day}`}
                            // to={'/calendar/day/2023-10-10'}
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
                        </div>
                        <TaskList
                            openModal={openModal}
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
            {modalOpen && <TaskModal closeModal={closeModal} />}
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
