import { ColumnList } from './TasksColumnsList.styled';

import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = () => {
    const columsName = [
        { name: 'To do', id: 1 },
        { name: 'In progress', id: 2 },
        { name: 'Done', id: 3 },
    ];
    return (
        <ColumnList>
            {columsName.map(name => (
                <TasksColumn header={name.name} key={name.id} />
            ))}
        </ColumnList>
    );
};
export default TasksColumnsList;
