import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column } from './TasksColumn.styled';

const TasksColumn = ({ header, tasks }) => {
    return (
        <Column>
            <ColumnHeadBar header={header} />

            <ColumnsTasksList tasks={tasks} />
            <AddTaskBtn />
        </Column>
    );
};
export default TasksColumn;
