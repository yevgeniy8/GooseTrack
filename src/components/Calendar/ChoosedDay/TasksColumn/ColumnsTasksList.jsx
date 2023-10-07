import { TaskList } from './ColumnsTasksList.styled';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasksCategoryName, tasksByCategory }) => {
    //поки закоментував
    // const sortedTasks = tasksList
    //     .filter(taskData => taskData.priority === 'high')
    //     .concat(tasksList.filter(taskData => taskData.priority === 'medium'))
    //     .concat(tasksList.filter(taskData => taskData.priority === 'low'));

    return (
        <TaskList>
            <TaskColumnCard
                tasksCategoryName={tasksCategoryName}
                tasksByCategory={tasksByCategory}
            ></TaskColumnCard>
        </TaskList>
    );
};
export default ColumnsTasksList;
