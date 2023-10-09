import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column } from './TasksColumn.styled';

const TasksColumn = ({ header, tasks, value }) => {
  const filterTasks = tasks.filter(task => task.category === value);
  // console.log(header);
  return (
    <Column>
      <ColumnHeadBar header={header} />

      <ColumnsTasksList tasks={filterTasks} />
      <AddTaskBtn value={value} />
    </Column>
  );
};
export default TasksColumn;
