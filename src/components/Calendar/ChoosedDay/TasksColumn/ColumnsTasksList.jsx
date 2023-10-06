import { TaskList } from './ColumnsTasksList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { selectTasks } from 'redux/calendar/calendarSelector';
import { useEffect } from 'react';
// import tasks from '../data/tasksdata.json';

const ColumnsTasksList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const sortedTasks = tasks;
    console.log(tasks);

    return (
        <TaskList>
            {tasks.length > 0 ? (
                <TaskColumnCard tasks={sortedTasks}></TaskColumnCard>
            ) : (
                <></>
            )}
            {/* <TaskColumnCard tasks={sortedTasks}></TaskColumnCard> */}
        </TaskList>
    );
};
export default ColumnsTasksList;
