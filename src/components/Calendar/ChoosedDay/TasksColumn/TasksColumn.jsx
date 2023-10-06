import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column } from './TasksColumn.styled';

const TasksColumn = props => {
    return (
        <Column>
            <ColumnHeadBar header={props.header} />

            <ColumnsTasksList />
            <AddTaskBtn />
        </Column>
    );
};
export default TasksColumn;
