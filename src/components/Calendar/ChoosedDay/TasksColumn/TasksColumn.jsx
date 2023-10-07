import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column } from './TasksColumn.styled';

const TasksColumn = ({ tasksList, category }) => {
    console.log(tasksList);
    return (
        <Column>
            <ColumnHeadBar title={tasksList} />

            <ColumnsTasksList tasksList={tasksList} category={category} />
            <AddTaskBtn />
        </Column>
    );
};
export default TasksColumn;
