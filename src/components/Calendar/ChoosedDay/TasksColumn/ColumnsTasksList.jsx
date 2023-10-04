import { TaskList } from './ColumnsTasksList.styled';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = () => {
  return (
    <TaskList>
      <TaskColumnCard></TaskColumnCard>
    </TaskList>
  );
};
export default ColumnsTasksList;
// import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
// import AddTaskButton from './AddTaskBtn';

// const TasksColumnsList = () => {
//   return (
//     <ColumnList>
//       <ColumnItem>
//         <h2>To do </h2>
//         <TaskList>
//           <TaskColumnCard></TaskColumnCard>
//         </TaskList>
//         <AddTaskButton />
//       </ColumnItem>

//       <ColumnItem>
//         <h2>In progress</h2>
//         <TaskList>
//           <TaskColumnCard></TaskColumnCard>
//         </TaskList>
//         <AddTaskButton />
//       </ColumnItem>

//       <ColumnItem>
//         <h2>Done</h2>
//         <TaskList>
//           <TaskColumnCard></TaskColumnCard>
//         </TaskList>
//         <AddTaskButton />
//       </ColumnItem>
//     </ColumnList>
//   );
// };
// export default TasksColumnsList;
