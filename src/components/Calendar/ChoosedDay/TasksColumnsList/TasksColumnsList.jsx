import { ColumnList } from './TasksColumnsList.styled';

import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = () => {
  return (
    <ColumnList>
      <TasksColumn></TasksColumn>
      <TasksColumn></TasksColumn>
      <TasksColumn></TasksColumn>
    </ColumnList>
  );
};
export default TasksColumnsList;
