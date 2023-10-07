import { TaskList } from './ColumnsTasksList.styled';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
// import tasks from '../data/tasksdata.json';

const ColumnsTasksList = ({ tasksList, category }) => {
    console.log(tasksList);
    console.log(category);
    //поки закоментував
    // const sortedTasks = tasksList
    //     .filter(taskData => taskData.priority === 'high')
    //     .concat(tasksList.filter(taskData => taskData.priority === 'medium'))
    //     .concat(tasksList.filter(taskData => taskData.priority === 'low'));

    return (
        <TaskList>
            <TaskColumnCard
                tasksList={tasksList}
                category={category}
            ></TaskColumnCard>
        </TaskList>
    );
};
export default ColumnsTasksList;
