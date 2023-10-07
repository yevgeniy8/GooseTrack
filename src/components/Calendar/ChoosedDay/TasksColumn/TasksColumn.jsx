import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column } from './TasksColumn.styled';

const TasksColumn = ({ header, tasks, value }) => {
    const filterTasks = tasks.filter(task => task.category === value);
    return (
        <Column>
            <ColumnHeadBar header={header} />

            <ColumnsTasksList tasks={filterTasks} />
            <AddTaskBtn />
        </Column>
    );
};
export default TasksColumn;
