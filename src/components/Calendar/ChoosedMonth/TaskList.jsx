import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Task } from './TaskList.styled';

import { TaskModal } from '../../TaskModal/TaskModal';

const TaskList = ({ currentDate, day, tasks }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [taskEdit, setTaskEdit] = useState({});

    if (!day) {
        return;
    }
    const formattedDay = day.toString().padStart(2, '0');
    const date = currentDate + '-' + formattedDay;
    const filterTasks = tasks.filter(task => task.date === date);

    const handleEditTask = task => {
        setTaskEdit(task);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setTaskEdit({});
    };

    return (
        <List>
            {filterTasks?.map(task => (
                <Task key={task._id} priority={task.priority}>
                    <NavLink onClick={() => handleEditTask(task)}>
                        {task.title}
                    </NavLink>

                    {modalOpen && (
                        <TaskModal
                            action={'edit'}
                            modalOpen={modalOpen}
                            closeModal={closeModal}
                            category={task.category}
                            task={taskEdit}
                        />
                    )}
                </Task>
            ))}
        </List>
    );
};

TaskList.propTypes = {
    currentDate: PropTypes.string.isRequired,
    day: PropTypes.number,
    tasks: PropTypes.array,
};

export default TaskList;
