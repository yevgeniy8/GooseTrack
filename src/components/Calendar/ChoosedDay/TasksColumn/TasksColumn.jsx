import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column } from './TasksColumn.styled';

const TasksColumn = ({ header, tasks, value }) => {
    return (
        <Column>
            <ColumnHeadBar header={header} value={value} />
            <ColumnsTasksList tasks={tasks} />
            <AddTaskBtn value={value} />
        </Column>
    );
};
export default TasksColumn;
