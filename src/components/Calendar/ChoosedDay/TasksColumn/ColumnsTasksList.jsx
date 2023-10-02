import { Ulka, Container, Colonka } from './ColumnsTasksList.styled';
// import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import AddTaskButton from './AddTaskBtn';

const TasksColumnsList = () => {
  return (
    <Container>
      <Colonka>
        <h2>
          To do{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </h2>
        <Ulka></Ulka>
        <AddTaskButton />
      </Colonka>
      <Colonka>
        <h2>In progress</h2>
        <Ulka></Ulka>
        <AddTaskButton />
      </Colonka>
      <Colonka>
        <h2>Done</h2>
        <Ulka></Ulka>
        <AddTaskButton />
      </Colonka>
    </Container>
  );
};
export default TasksColumnsList;
