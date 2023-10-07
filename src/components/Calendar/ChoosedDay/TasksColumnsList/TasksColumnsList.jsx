import { ColumnList } from './TasksColumnsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = () => {
    const categoryOptions = [
        { name: 'To do', value: 'to-do', id: 1 },
        { name: 'In progress', value: 'in-progress', id: 2 },
        { name: 'Done', value: 'done', id: 3 },
    ];

    const { currentDay } = useParams();
    console.log(currentDay);
    // const date = new Date(currentDay);

    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const filtredTasks = tasks.filter(task => task.date === currentDay);
    console.log(tasks);
    return (
        <ColumnList>
            {categoryOptions.map(option => (
                <TasksColumn
                    header={option.name}
                    tasks={filtredTasks}
                    value={option.value}
                    key={option.id}
                />
            ))}
        </ColumnList>
    );
};
export default TasksColumnsList;
