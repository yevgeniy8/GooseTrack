
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/calendar/calendarSelector';
import { NavLink } from 'react-router-dom';

const TaskList = () => {
    const tasks = useSelector(selectTasks);
 
    return (
    <ul>
            {tasks?.map(task =>
            (
                <li key={task.date}>
                     {/* bg={`some-color-of-task-${task.priority})`} //прописать из переменных
                     color={`some-color-of-task-${task.priority})`} */}
          
                    <NavLink>{task.title}</NavLink>
                </li>
            )
            )}
    </ul>
)}


export default TaskList;