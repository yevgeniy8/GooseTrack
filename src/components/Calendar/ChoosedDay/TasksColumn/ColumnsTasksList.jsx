import { TaskList } from './ColumnsTasksList.styled';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
    return (
        <TaskList>
            {tasks.length > 0 ? (
                <TaskColumnCard tasks={tasks}></TaskColumnCard>
            ) : (
                <></>
            )}
        </TaskList>
    );
};
export default ColumnsTasksList;
