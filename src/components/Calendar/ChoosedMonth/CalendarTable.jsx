import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';

import { datesAreOnSameDay, getDaysInMonth, getSortedDays } from './utils';
import { Table } from './ChoosedMonth.styled';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

// import { TaskModal } from '../../TaskModal/TaskModal';
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


    // const [modalOpen, setModalOpen] = useState(false);

    // const openModal = () => setModalOpen(true);
    
    // const closeModal = () => {
    //     setModalOpen(false);
    // };

    const handleClick = day => {
        if (day < 10) {
            day = `${0}${day}`;
            console.log(day);
        }

        // const loc = localStorage.getItem('type');

        // console.log(loc);

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
                        </NavLink>
                        <TaskList
                            // openModal={openModal}
                            currentDate={currentDate}
                            day={day}
                            tasks={tasks}
                        />
                    </div>
                ))}
            </Table>
            {/* {modalOpen && <TaskModal closeModal={closeModal} />} */}
        </>
    );
};

export default CalendarTable;
