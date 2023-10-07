import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column } from './TasksColumn.styled';

const TasksColumn = ({ header }) => {
    return (
        <Column>
            <ColumnHeadBar header={header} />

            <ColumnsTasksList />
            <AddTaskBtn />
        </Column>
    );
};
export default TasksColumn;
