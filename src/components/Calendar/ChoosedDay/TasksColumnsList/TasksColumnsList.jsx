import { ColumnList } from './TasksColumnsList.styled';

import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = () => {
    const columsName = ['To do', 'In progress', 'Done'];
    return (
        <ColumnList>
            {columsName.map(name => (
                <TasksColumn header={name} />
            ))}
            {/* <TasksColumn></TasksColumn>
            <TasksColumn></TasksColumn>
            <TasksColumn></TasksColumn> */}
        </ColumnList>
    );
};
export default TasksColumnsList;
