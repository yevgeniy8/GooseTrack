import { ColumnList, Wrapper } from './TasksColumnsList.styled';
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

    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    useEffect(() => {
        dispatch(fetchTasks(currentDay));
    }, [currentDay, dispatch]);

    const filtredTasksByDay = tasks.filter(task => task.date === currentDay);

    const filterTasksByCategory = category =>
        filtredTasksByDay.filter(task => task.category === category);

    return (
        <Wrapper>
            <ColumnList>
                {categoryOptions.map(option => (
                    <TasksColumn
                        header={option.name}
                        tasks={filterTasksByCategory(option.value)}
                        value={option.value}
                        key={option.id}
                    />
                ))}
            </ColumnList>
        </Wrapper>
    );
};
export default TasksColumnsList;
