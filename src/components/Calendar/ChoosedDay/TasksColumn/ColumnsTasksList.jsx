import { TaskList } from './ColumnsTasksList.styled';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import tasks from '../data/tasksdata.json';

const ColumnsTasksList = () => {
  const sortedTasks = tasks
    .filter(taskData => taskData.priority === 'high')
    .concat(tasks.filter(taskData => taskData.priority === 'medium'))
    .concat(tasks.filter(taskData => taskData.priority === 'low'));

  return (
    <TaskList>
      <TaskColumnCard tasks={sortedTasks}></TaskColumnCard>
    </TaskList>
  );
};
export default ColumnsTasksList;
