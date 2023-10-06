import { TaskList } from './ColumnsTasksList.styled';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
// import tasks from '../data/tasksdata.json';

const ColumnsTasksList = () => {
    const dispatch = useDispatch();
    const tasks = dispatch(fetchTasks());

    const sortedTasks = tasks.tasks;
    // console.log(tasks);

    return (
        <TaskList>
            {tasks.length > 0 ? (
                <TaskColumnCard tasks={sortedTasks}></TaskColumnCard>
            ) : (
                <p>Your tasks is empty.</p>
            )}
            {/* <TaskColumnCard tasks={sortedTasks}></TaskColumnCard> */}
        </TaskList>
    );
};
export default ColumnsTasksList;
