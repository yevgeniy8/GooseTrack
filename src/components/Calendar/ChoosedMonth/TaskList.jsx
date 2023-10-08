import { NavLink } from 'react-router-dom';

const TaskList = ({ currentDate, day, tasks }) => {
    if (!day) {
        return;
    }
    const formattedDay = day.toString().padStart(2, '0');
    const date = currentDate + '-' + formattedDay;
    const filterTasks = tasks.filter(task => task.date === date);

    return (
        <ul>
            {filterTasks?.map(task => (
                <li key={task._id}>
                    {/* bg={`some-color-of-task-${task.priority})`} //прописать из переменных
                     color={`some-color-of-task-${task.priority})`} */}

                    <NavLink>{task.title}</NavLink>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
