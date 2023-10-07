import { ColumnList } from './TasksColumnsList.styled';

import TasksColumn from '../TasksColumn/TasksColumn';
import tasks from '../data/tasksdata.json';

const TasksColumnsList = ({ selectedDay = '03.01.23' }) => {
    //фільтруемо таски по категоріям
    const todoTasksAll = tasks.filter(task => task.category === 'to-do');
    const inProgressTasksAll = tasks.filter(
        task => task.category === 'in-progress'
    );
    const doneTasksAll = tasks.filter(task => task.category === 'done');

    // перевіряем обраний день на наявність тасок по даті
    const todo = todoTasksAll.filter(task => task.date === selectedDay);
    const inProgress = inProgressTasksAll.filter(
        task => task.date === selectedDay
    );
    const done = doneTasksAll.filter(task => task.date === selectedDay);
    // console.log(todo);

    return (
        <ColumnList>
            <TasksColumn tasksCategoryName="To do" tasksByCategory={todo} />
            <TasksColumn
                tasksCategoryName="In progress"
                tasksByCategory={inProgress}
                selectedDay={selectedDay}
            />
            <TasksColumn tasksCategoryName="Done" tasksByCategory={done} />
        </ColumnList>
    );
};
export default TasksColumnsList;
