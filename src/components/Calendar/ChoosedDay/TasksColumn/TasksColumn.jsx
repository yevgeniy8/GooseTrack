import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column } from './TasksColumn.styled';

const TasksColumn = ({ tasksCategoryName, tasksByCategory }) => {
    return (
        <Column>
            <ColumnHeadBar title={tasksCategoryName} />

            <ColumnsTasksList
                tasksList={tasksCategoryName}
                tasksByCategory={tasksByCategory}
            />
            <AddTaskBtn />
        </Column>
    );
};
export default TasksColumn;
