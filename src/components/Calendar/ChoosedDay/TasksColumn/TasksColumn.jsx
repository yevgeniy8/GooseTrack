import AddTaskBtn from './AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnsTasksList from './ColumnsTasksList';
import { Column, Container } from './TasksColumn.styled';

const TasksColumn = () => {
  return (
    <Column>
      <Container>
        <ColumnHeadBar />
      </Container>
      <ColumnsTasksList />
      <AddTaskBtn />
    </Column>
  );
};
export default TasksColumn;
