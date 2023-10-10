import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';
// import styled from '@emotion/styled';

import { datesAreOnSameDay, getDaysInMonth, getSortedDays } from './utils';
import { Table } from './ChoosedMonth.styled';
// import { useNavigate, useParams } from 'react-router';
import { useParams } from 'react-router';

import { TaskModal } from '../../TaskModal/TaskModal';
import TaskList from './TaskList';
import { NavLink } from 'react-router-dom';
// import moment from 'moment';

const CalendarTable = () => {
    const { currentDate } = useParams();
    // const navigate = useNavigate();

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
                            to={`/calendar/day/${currentDate + '-' + day}`}
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
                            openModal={openModal}
                            currentDate={currentDate}
                            day={day}
                            tasks={tasks}
                        />
                    </div>
                ))}
            </Table>
            {modalOpen && <TaskModal closeModal={closeModal} />}
        </>
    );
};

export default CalendarTable;

