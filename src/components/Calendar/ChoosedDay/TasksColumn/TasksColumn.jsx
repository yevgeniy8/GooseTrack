import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column } from './TasksColumn.styled';

const TasksColumn = () => {
  return (
    <Column>
      <ColumnHeadBar />

      <ColumnsTasksList />
      <AddTaskBtn />
    </Column>
  );
};
export default TasksColumn;
