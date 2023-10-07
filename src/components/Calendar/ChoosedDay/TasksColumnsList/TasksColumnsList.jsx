import { ColumnList } from './TasksColumnsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = () => {
    const columsName = [
        { name: 'To do', id: 1 },
        { name: 'In progress', id: 2 },
        { name: 'Done', id: 3 },
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
            {columsName.map(name => (
                <TasksColumn
                    header={name.name}
                    tasks={filtredTasks}
                    key={name.id}
                />
            ))}
        </ColumnList>
    );
};
export default TasksColumnsList;
