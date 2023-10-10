// import { NavLink } from 'react-router-dom';

// import { useState } from 'react';
import { List, Task } from './TaskList.styled';

const TaskList = ({ currentDate, day, tasks, openModal }) => {
    if (!day) {
        return;
    }
    const formattedDay = day.toString().padStart(2, '0');
    const date = currentDate + '-' + formattedDay;
    const filterTasks = tasks.filter(task => task.date === date);

    return (
        <List>
            {filterTasks?.map(task => (
                <Task
                    onClick={() => {
                        openModal(task._id);
                    }}
                    key={task._id}
                    priority={task.priority}
                >
                    <p>{task.title}</p>
                </Task>
            ))}
        </List>
    );
};

export default TaskList;
